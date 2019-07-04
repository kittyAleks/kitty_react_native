import React, { Component } from "react";
import {View} from "react-native";
import {Button} from "react-native-elements";
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux';
import { imagePickedUpAction } from "../actions";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    imagePickedUp(imagePath) {
        dispatch(imagePickedUpAction(imagePath));
    }
});

class ImagePickerScreen extends React.Component {
    static navigationOptions = {
        title: 'Choose avatar',
    };

    pickUpImage(image) {
        this.props.imagePickedUp(image.path);
        this.props.navigation.navigate('Contacts');
    }


    render() {
        return (
            <View>
                <Button
                    title="From camera"
                    onPress={() => {
                        ImagePicker.openCamera({}).then(image => {
                            this.pickUpImage(image);
                        })
                    }}
                />
                <Button
                    title="From gallery"
                    onPress={() => {
                        ImagePicker.openPicker({}).then(image => {
                            this.pickUpImage(image);
                        })
                    }}
                />
            </View>

        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImagePickerScreen);
