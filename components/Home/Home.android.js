import React from 'react'
import { Text, View, Slider, ImageBackground, Button } from 'react-native'

import { connect } from 'react-redux'
import {storeDuration} from '../../ducks/reducer'
import styles from './Home.styles'
import {Actions} from 'react-native-router-flux'


class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      value: 30
    }
  }

  sliderValue(value){
    let duration = Math.round(value)
    if(duration%5===0){
      this.props.storeDuration(duration)
    }
  }

  render(props) {
    return (
      
       <ImageBackground style={styles.background} source={require('../../assets/background.png')}>
        
        <View style={styles.slide}>
        <Slider
        value={30}
        minimumValue={15}
        maximumValue={45}
        minimumTrackTintColor={'gray'}
        thumbTintColor={'#FF2463'}
    value={this.state.value}
    onValueChange={(value) => this.sliderValue(value)} />
      <Text style={styles.minutes}>{this.props.duration} min</Text>
      </View>
        <Button 
        title="Start Blok" color="#FF2463"
        onPress={() => Actions.main()}/>
        
      </ImageBackground>
    );
  }
}

function mapStateToProps(state){
  return {
    ...this.props, ...state
  }
}

export default connect(mapStateToProps, {storeDuration})(Home)

