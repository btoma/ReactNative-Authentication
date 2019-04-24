import firebase from 'firebase'
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import  { Header } from './src/components'

export default class App extends Component{
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDGv7HqpizLqjhMwXuSPR4MFoOvp0TMmA8",
            authDomain: "authentication-2a68b.firebaseapp.com",
            databaseURL: "https://authentication-2a68b.firebaseio.com",
            projectId: "authentication-2a68b",
            storageBucket: "authentication-2a68b.appspot.com",
            messagingSenderId: "59454858875"
        });
    }

    render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App</Text>
      </View>
    );
  }
}
