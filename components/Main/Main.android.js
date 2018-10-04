import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Main.styles'


export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      timer: 0
    }
  }

   startTimer(){

     setInterval(() => {
      this.setState({timer: ++this.state.timer})
     },1000)

   }

   stopTimer(){
     alert('stop!')
   }

   componentDidMount(){
      this.startTimer()
   }

  render() {
    
    return (
      <View style={styles.container}>
        <Text 
        onPress={() => this.stopTimer()}
        style={styles.timer}>{this.state.timer}</Text>
      </View>
    );
  }
}


