import React, { Component } from "react";
import {  FlatList } from "react-native";
import { ListItem } from 'react-native-elements'

class ContactsListView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&results=20`;
        console.log(`[QQQ] makeRemoteRequest: ${url}`);
        this.setState({ loading: true });
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.results,
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
                //console.log("[QQQ] " + JSON.stringify(res.results));
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <ListItem
                        title={`${item.name.first} ${item.name.last}`}
                        subtitle={item.email}
                        leftAvatar={{ source: { uri: item.picture.thumbnail }}}
                        onPress={() => {
                            navigate('ImagePicker')
                        }}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

export default ContactsListView;