import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Main.styles'
import {connect} from 'react-redux'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      timer: this.props.duration * 60,
      minutes: this.props.duration,
      seconds: 0
    }
  }

   startTimer(){

     setInterval(() => {
      if (this.state.seconds===0){
        this.setState({seconds: 59})
      }
      if(this.state.timer%60===0){
        this.setState({minutes: this.state.minutes-1})
      }
      
      this.setState({
        timer: --this.state.timer, 
        seconds: --this.state.seconds
      })
     },1000)

   }

   stopTimer(){
     alert('stop!')
   }

   componentDidMount(){
      this.startTimer()
   }

  render(props) {
    
    return (
      <View style={styles.container}>
        <Text 
        onPress={() => this.stopTimer()}
        style={styles.timer}>{`${this.state.minutes}:${this.state.seconds}`}</Text>

         <Text 
        style={styles.timer}>Timer: {this.state.timer}</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    ...this.props, ...state
  }
}

export default connect(mapStateToProps)(Main);


