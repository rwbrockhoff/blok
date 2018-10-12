import React from 'react';
import { AppRegistry } from 'react-native'
import {Router, Stack, Scene} from 'react-native-router-flux'

import store from './ducks/store'
import {Provider} from 'react-redux'

import Home from './components/Home/Home.android'
import Main from './components/Main/Main.android'

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="home" component={Home} hideNavBar={true}/>
            <Scene key="main" component={Main} hideNavBar={true}/>
          </Stack>
        </Router>
    </Provider>
    );
  }
}

AppRegistry.registerComponent('blok', () => App) 


