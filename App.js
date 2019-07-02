import React, {Component} from 'react';

import ContactsScreen from './components/ContactsScreen'
import ImagePickerScreen from './components/ImagePickerScreen'

import {createStackNavigator, createAppContainer} from 'react-navigation';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

const initialState = {};
const store = createStore(reducers, initialState);

const MainNavigator = createStackNavigator({
    Contacts: {screen: ContactsScreen},
    ImagePicker: {screen: ImagePickerScreen},
});

let Navigation = createAppContainer(MainNavigator);

// Render the app container component with the provider around it
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}



export default App;








