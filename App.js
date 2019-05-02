import firebase from 'firebase'
import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Card, CardSection, Header, Spinner} from './src/components/common'
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDGv7HqpizLqjhMwXuSPR4MFoOvp0TMmA8',
            authDomain: 'authentication-2a68b.firebaseapp.com',
            databaseURL: 'https://authentication-2a68b.firebaseio.com',
            projectId: 'authentication-2a68b',
            storageBucket: 'authentication-2a68b.appspot.com',
            messagingSenderId: '59454858875'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={()=>{console.log("SigningOut!");firebase.auth().signOut();}}>Log out</Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size={'large'}/>;
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
}
