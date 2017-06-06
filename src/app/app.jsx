import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './redux/store';

import { createHistory } from 'history'
import InitialState from './redux/store/initialState';

const history = createHistory();
const Store = configureStore(InitialState(), history);

ReactDOM.render(
  <Root store={ Store } history={ history } />
, document.getElementById('app'))
