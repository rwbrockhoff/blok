import React from 'react'
import { Text, View } from 'react-native'
import RouterButton from 'react-router-native-button'

import styles from './Home.styles'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}>blok</Text>
        <RouterButton to="/" title="start blok" color="#841584"/>
      </View>
    );
  }
}


