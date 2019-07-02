import React, { Component } from "react";
import {View} from "react-native";
import {Button} from "react-native-elements";
import ImagePicker from 'react-native-image-crop-picker';

class ImagePickerScreen extends React.Component {
    static navigationOptions = {
        title: 'Choose avatar',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Button
                    title="From camera"
                    onPress={() => {
                        ImagePicker.openCamera({}).then(image => {
                            console.log(image);
                        })
                    }}
                />
                <Button
                    title="From gallery"
                    onPress={() => {
                        ImagePicker.openPicker({}).then(image => {
                            console.log(image);
                        })
                    }}
                />
            </View>

        );
    }
}

export default ImagePickerScreen;

