import React, {Component} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

const D = () => {
  return (
    <View>
      <Text style={styles.maniText}>
        This is Simple Todo App Where u can take down the Tasks to do in Daily
        this is made using React Native{'\n'}
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://github.com/Manoj-36/Todo-App')}>
        Source Code
      </Text>
      <Text style={styles.bottom}>ALpha</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  maniText: {
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 129,
    paddingRight: 129,
    marginTop: 100,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  },
  bottom:{
      flex: 1,
      alignContent: 'flex-end',
    fontSize: 20,
    top: 280,
  },
});

export default D;
