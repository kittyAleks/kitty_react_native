import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { contactsUpdatedAction, contactSelectedAction } from "../actions";

const mapStateToProps = (state) => ({
    contactList: state.contactList
});

const mapDispatchToProps = (dispatch) => ({
    contactsUpdated(contactList) {
        dispatch(contactsUpdatedAction(contactList));
    },
    contactSelected(selectedContactIndex) {
        dispatch(contactSelectedAction(selectedContactIndex));
    }
});

class ContactsScreen extends Component {
    constructor(props) {
        super(props);
        if(this.props.contactList && this.props.contactList.length === 0) {
            this.makeRemoteRequest();
        }
    }

    makeRemoteRequest = () => {
        const seed = 1;
        const url = `https://randomuser.me/api/?seed=${seed}&results=20`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.props.contactsUpdated(res.results);
            })
            .catch(error => {
            });
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <FlatList
                data={this.props.contactList}
                renderItem={({ item, index }) => (
                    <ListItem
                        title={`${item.name.first} ${item.name.last}`}
                        subtitle={item.email}
                        leftAvatar={{ source: { uri: item.picture.thumbnail }}}
                        onPress={() => {
                            this.props.contactSelected(index);
                            navigate('ImagePicker');
                        }}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsScreen);
