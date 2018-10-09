import React from 'react';
import { Text, View, Animated, Easing, StyleSheet, Image } from 'react-native';
// import { styles } from './Main.styles'
import {connect} from 'react-redux'
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
      
      
     },1000)

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

  render(props) {
    
    var conditionalTimerDisplay = () => {
      if(this.state.paused){
        return (
          <View style={styles.container}>

        <Text
        onPress={() => this.stopTimer()}
        style={styles.timer}>
        {`${this.state.minutes}:${this.state.seconds}`}
        </Text>

        <Image style={styles.loadImage}source={require('../../assets/full.png')}/>

         </View>
        )
      }
      else {
        return (
          <View style={styles.container}>
          <Text onPress={() => this.stopTimer()}
          style={styles.timer}>
          {`${this.state.minutes}:${this.state.seconds}`}
          </Text>

          <Animatable.Image 
          animation="pulse" iterationCount="infinite" 
          style={styles.loadImage}source={require('../../assets/full.png')}/>
          </View>
        )
      }
    }

    return (
      <View style={styles.container}>
      
        
        {conditionalTimerDisplay()}

         

         
    
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


