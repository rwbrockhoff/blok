import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Main.styles'
import _ from 'lodash'

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      timer: 0
    }
  }

    renderTimer(){
      alert('yeah')
      this.setState({
        timer: 30 
      })
    
  }

  componentDidMount(){
    _.debounce(renderTimer, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.timer}</Text>
      </View>
    );
  }
}


