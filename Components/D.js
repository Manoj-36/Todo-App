import React,{ Component } from 'react';
import {View, Text, StyleSheet, Linking } from 'react-native';

const D = () => {
    return(
        <View>
            <Text style={styles.maniText}>This is Simple Todo App 
                Where u can take down the Tasks to do in Daily
                this is made using React Native{'\n'}
            </Text>
            <Text style={styles.link}
                onPress={() => Linking.openURL('https://github.com/Manoj-36/Todo-App')}>
                Source Code
            </Text>
            <Text style={styles.fotter}>
                <Text>© Alpha | α |React Native</Text>
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    maniText:{
        fontSize: 20,
        textAlign: 'center',
        paddingLeft: 129,
        paddingRight: 129,
        marginTop: 200,
        fontWeight: 'bold',
    },
    fotter:{
        fontSize:20,
        top: 250,
        textAlign: 'center',
    },
    link:{
        fontSize:20,
        color: 'blue',
        textAlign: 'center',
    },
});

export default D;