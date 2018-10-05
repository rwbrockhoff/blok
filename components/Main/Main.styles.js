import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    timer: {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: 45
    },
    timerPaused: {
      color: 'green',
      fontFamily: 'Roboto',
      fontSize: 45
    }
  });