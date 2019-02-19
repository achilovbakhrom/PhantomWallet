import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const TextField = (props) => {
    return (
        <TextInput 
                style={styles.main}
                textAlign='center'
                {...props}
            />
        
    )
}

const styles = StyleSheet.create({
    main: {
        height: 45,
        minWidth: 300,
        backgroundColor: 'white',
        borderRadius: 1000,
        padding: 15
    }
})

export default TextField;