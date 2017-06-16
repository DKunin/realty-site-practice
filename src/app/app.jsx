import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './redux/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import { browserHistory } from 'react-router';
import InitialState from './redux/store/initialState';
const Store = configureStore(InitialState(), browserHistory);

ReactDOM.render(
    <Root store={Store} history={browserHistory} />,
    document.getElementById('app')
);
