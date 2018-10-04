import React from 'react'
import { Text, View, Slider } from 'react-native'
import RouterButton from 'react-router-native-button'
import { connect } from 'react-redux'
import {storeDuration} from '../../ducks/reducer'
import styles from './Home.styles'


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
      <View style={styles.container}>
        <Text style={styles.font}>blok</Text>

        <View style={styles.slide}>
        <Slider
        value={30}
        minimumValue={15}
        maximumValue={45}
        minimumTrackTintColor={'gray'}
        thumbTintColor={'#841584'}
    value={this.state.value}
    onValueChange={(value) => this.sliderValue(value)} />
      <Text style={styles.minutes}>{this.props.duration} min</Text>
      </View>

        <RouterButton to="/Main" title="start blok" color="#841584"/>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    ...this.props, ...state
  }
}

export default connect(mapStateToProps, {storeDuration})(Home)

