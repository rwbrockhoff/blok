import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
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
    loadImage: {
      flex: 1,
      aspectRatio: 0.3,
      resizeMode: 'contain'
    }
  });

  module.exports = styles