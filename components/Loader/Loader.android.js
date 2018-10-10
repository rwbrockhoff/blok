import React from 'react'
import { Text, View, Slider, ImageBackground } from 'react-native'
import RouterButton from 'react-router-native-button'
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import styles from '../Home/Home.styles'


class Loader extends React.Component {
 
  render(props) {
    var fourth = (this.props.duration * 60)/4
    const {timer} = this.props

    if(timer < fourth){
        return (
            <View>
                <Text style={styles.view}>1/4 timer</Text>
            </View>
        )
    }
    
    else if(timer < fourth * 2 ) {
        return (
            <View>
                <Text style={styles.view}>1/2 timer</Text>
            </View>
        )
    }
    else if(timer < fourth * 3 ){
        return (
            <View>
                <Text style={styles.view}>3/4 timer</Text>
            </View>
        )
    }
    
    else {
        return (
            <View>
                <Text style={styles.view}>Full Timer</Text>
            </View>
        )
    }
    
    
  }
}

function mapStateToProps(state){
  return {
    ...this.props, ...state
  }
}

export default connect(mapStateToProps)(Loader)

