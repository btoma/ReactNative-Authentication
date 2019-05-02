import React from 'react';
import {TextInput, View, Text, Platform} from 'react-native';

const Input = ({label, value, onChangeText,placeholder, secureTextEntry}) => {
    const {inputStyle, labelStyle, containerStyle} = style;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                autoCorrect={false}
                placeholder={placeholder}
            />
        </View>
    );

};

const style = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        height: Platform.OS === 'android' ? 40 : 20,
        width: 100
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export {Input}