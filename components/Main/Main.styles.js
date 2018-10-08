import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    timer: {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: 55,
      fontWeight: '100'
    },
    timerPaused: {
      color: '#ED2656',
      fontFamily: 'Roboto',
      fontSize: 55,
      fontWeight: '100'
    },
    image: {
      flex: 1
    }
  });

  module.exports = styles