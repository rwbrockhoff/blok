import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Main.styles'
import {connect} from 'react-redux'

class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      timer: 0
    }
  }

   startTimer(){

     setInterval(() => {
      this.setState({timer: ++this.state.timer})
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
        style={styles.timer}>{this.props.duration}</Text>
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


