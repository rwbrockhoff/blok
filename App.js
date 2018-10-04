import React from 'react';
import { NativeRouter, Route, Switch} from 'react-router-native'

import store from './ducks/store'
import {Provider} from 'react-redux'

import Home from './components/Home/Home.android'
import Main from './components/Main/Main.android'

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
        <NativeRouter>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path='/Main' component={Main}/>
          </Switch>
        </NativeRouter>
    </Provider>
    );
  }
}


