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
      seconds: `00`
    }
  }

   startTimer(){

     setInterval(() => {
       
      //30:00
      //30:58
      
      if(parseInt(this.state.seconds) < 10){
        this.setState({
          timer: this.state.timer-1,
          seconds: `0${this.state.timer % 60}`
        })
      }

      if(parseInt(this.state.seconds) >= 10){
        this.setState({
          timer: this.state.timer-1,
          seconds: this.state.timer % 60
        })
      }
      
      if(parseInt(this.state.seconds)===59){
        this.setState({
          minutes: this.state.minutes-1
        })
      }
      
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


