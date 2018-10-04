import reducer from './reducer'
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(reducer, devToolsEnhancer());

export default store;

