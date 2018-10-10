import React from 'react';
import { Text, View, Animated, Easing, StyleSheet, Image } from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Icon} from 'react-native-elements'

// import { styles } from './Main.styles'
import {connect} from 'react-redux'
import * as Animatable from 'react-native-animatable';
import Loader from '../Loader/Loader.android'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    position: 'absolute'
  },
  timer: {
    color: 'white',
    fontFamily: 'sans-serif-light',
    fontSize: 50,
    fontWeight: '100',
    position: 'absolute',
    zIndex: 2
  },
  timerPaused: {
    color: 'red',
    fontFamily: 'sans-serif-light',
    fontSize: 50,
    fontWeight: '100',
    position: 'absolute',
    zIndex: 2
  },
  loadImage: {
    flex: 1,
    aspectRatio: 0.3,
    resizeMode: 'contain'
  },
  iconContainer: {
    position: 'absolute', 
    top: 50, 
    left: 30, 
    zIndex: 2
  }
})

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
      
      
     },100)

   }

   stopTimer(){
     
      this.setState(() => {
        if(this.state.paused){
          //true
          this.startTimer()
          return {paused: false}
        }

        else {
          //false
          clearInterval(globalTimer)
      
          return {paused: true}

        }

      })
    
   }

   componentDidMount(){
      this.startTimer()
   }

   componentWillUnmount(){
     clearInterval(globalTimer)
   }

  render(props) {
    
    var conditionalTimerDisplay = () => {
      if(this.state.paused){
        return (
          <View style={styles.timerContainer}>

        <Text
        onPress={() => this.stopTimer()}
        style={styles.timer}>
        {`${this.state.minutes}:${this.state.seconds}`}
        </Text>


         </View>
        )
      }
      else {
        return (
          <View style={styles.timerContainer}>
          <Text onPress={() => this.stopTimer()}
          style={styles.timer}>
          {`${this.state.minutes}:${this.state.seconds}`}
          </Text>
          </View>
        )
      }
    }

    return (
      <View style={styles.container}>
      
      
        
        {conditionalTimerDisplay()}

         
      <Loader 
      duration={this.state.duration}
      timer={this.state.timer}
      paused={this.state.paused}
      />
      
      <View style={styles.iconContainer}>
      
         <Icon type='ionicon' name='ios-arrow-back' 
         color='white' size={40}
         onPress={() => Actions.home()}/>
         
      </View>
      
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


