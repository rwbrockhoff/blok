import React from 'react'
import { Text, View, Slider, ImageBackground, Image } from 'react-native'
import RouterButton from 'react-router-native-button'
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';

import styles from '../Main/Main.styles'


class Loader extends React.Component {
 
  render(props) {
    var fourth = (this.props.duration * 60)/4
    const {timer} = this.props

    if(this.props.paused){

        if(timer <= fourth){
            return (
                <View>
            <Image style={styles.loadImage}
            source={require('../../assets/14.png')}/>
                </View>
            )
        }
        
        else if(timer <= fourth * 2 ) {
            return (
                <View>
                   <Image style={styles.loadImage}
            source={require('../../assets/12.png')}/>
                </View>
            )
        }
        else if(timer <= fourth * 3 ){
            return (
                <View>
                   <Image style={styles.loadImage}
            source={require('../../assets/34.png')}/>
                </View>
            )
        }
        
        else {
            return (
                <View>
                   <Image style={styles.loadImage}
            source={require('../../assets/full.png')}/>
                </View>
            )
        }
    }


    else {

        if(timer <= fourth){
            return (
                <View>
                    <Animatable.Image 
              animation="pulse" iterationCount="infinite" 
              style={styles.loadImage}source={require('../../assets/14.png')}/>
                </View>
            )
        }
        
        else if(timer <= fourth * 2 ) {
            return (
                <View>
                   <Animatable.Image 
              animation="pulse" iterationCount="infinite" 
              style={styles.loadImage}source={require('../../assets/12.png')}/>
                </View>
            )
        }
        else if(timer <= fourth * 3 ){
            return (
                <View>
                    <Animatable.Image 
              animation="pulse" iterationCount="infinite" 
              style={styles.loadImage}source={require('../../assets/34.png')}/>
                </View>
            )
        }
        
        else {
            return (
                <View>
                   <Animatable.Image 
              animation="pulse" iterationCount="infinite" 
              style={styles.loadImage}source={require('../../assets/full.png')}/>
                </View>
            )
        }
    }
    
    
  }
}

function mapStateToProps(state){
  return {
    ...this.props, ...state
  }
}

export default connect(mapStateToProps)(Loader)

