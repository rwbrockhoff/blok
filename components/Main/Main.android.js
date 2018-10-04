import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Main.styles'

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
      </View>
    );
  }
}


