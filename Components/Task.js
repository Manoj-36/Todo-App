import React from 'react';
import { View,  Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return(
            <View style={styles.items}>
                <View style={styles.itemLeft}>
                    <View style={styles.square} ></View>
                    <Text style={styles.itemText}>{props.text}</Text>
                </View>
                    {/* <View style={styles.circular} ></View> */}
            </View>
    )
}

// onPress={() => completeTask(index)}

const styles = StyleSheet.create({
    items:{
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        borderWidth:1,
        borderColor: '#000',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#92817A',
        // opacity: 0.4,
        borderRadius: 8,
        marginRight: 15,
    },
    itemText:{
        maxWidth: '80%',
        fontSize: 18,
    },

    circular:{
        width: 12,
        height:12,
        backgroundColor: '#92817A',
        borderRadius: 4,
    },
});



export default Task;