import React from 'react';
import { NativeRouter, Route} from 'react-router-native'

import Home from './components/Home/Home.android'
import Main from './components/Main/Main.android'

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Route exact path="/" component={Home}/>
      </NativeRouter>
    );
  }
}


