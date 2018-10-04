import React from 'react'
import { Text, View, Slider } from 'react-native'

import RouterButton from 'react-router-native-button'

import styles from './Home.styles'

export default class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      value: 15
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font}>blok</Text>

        <View style={styles.slide}>
        <Slider
        minimumValue={15}
        maximumValue={45}
    value={this.state.value}
    onValueChange={(value) => this.setState({value: Math.round(value)})} />
      <Text style={styles.minutes}>{this.state.value} min</Text>
      </View>

        <RouterButton to="/Main" title="start blok" color="#841584"/>
      </View>
    );
  }
}


