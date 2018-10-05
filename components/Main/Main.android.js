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
      seconds: `00`,
      paused: false
    }

    //setting global timer variable so that we can use clearInterval and not be limited by scope
    var globalTimer
  }

   startTimer(){

     globalTimer = setInterval(() => {
       //passing in a function to setState is more reliable, and by returning state we don't have to worry about this.state.seconds matching multiple conditions. Once it meets one condition, it resolves for that given second. 

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
     this.setState(() => {
       clearInterval(globalTimer)

       return {
         paused: true
       }
     })

     
     
   }

   componentDidMount(){
      this.startTimer()
   }

  render(props) {

    var conditionalStyle = () => {
      return this.state.paused ?  styles.timerPaused : styles.timer
    }
    
    return (
      <View style={styles.container}>
      
        <Text 
        onPress={() => this.stopTimer()}
        style={conditionalStyle()}
        >{`${this.state.minutes}:${this.state.seconds}`}</Text>

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


