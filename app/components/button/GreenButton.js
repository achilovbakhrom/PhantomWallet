import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const GreenButton = (props) => {
    return (
        <TouchableOpacity
            style={[styles.button, {...props.style}]} >
              <Text style={styles.title}>{props.title === undefined ? '' : props.title}</Text>
        </TouchableOpacity>        
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#01b095',
        shadowColor: '#01b095',
        shadowRadius: 4,
        shadowOpacity: 0.9,
        shadowOffset: {width: 0, height: 3},
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center'          
    }, 
    title: {
        fontSize: 18,
        color: 'white'
    }
})

export default GreenButton;