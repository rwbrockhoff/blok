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
       
        this.setState(() => {
          if(parseInt(this.state.seconds)===0){
            return {
              timer: this.state.timer -1,
              minutes: this.state.minutes -1, 
              seconds: 59
            }
          }
          
          if(parseInt(this.state.seconds)===59){
            return {
              timer: this.state.timer -1,
              seconds: this.state.seconds -1
            }
          }

          if(parseInt(this.state.seconds) > 10){
            return {
              timer: this.state.timer -1, 
              seconds: this.state.seconds -1
            }
          }

          if(parseInt(this.state.seconds) <= 10){
            return {
              timer: this.state.timer -1,
              seconds: `0${this.state.seconds -1}`
            }
          }
        })
      
      
     },1000)

   }

   stopTimer(){
     clearInterval(startTimer)
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


