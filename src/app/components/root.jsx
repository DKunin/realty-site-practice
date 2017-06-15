import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Wrapper from './wrapper.jsx';
import NoMatch from './noMatch.jsx';
import Main from './main.jsx';
import Feed from './feed.jsx';
import SingleItem from './singleItem.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Root = props => {
    const { store, history } = props;

    return (
        <MuiThemeProvider>
            <Provider store={store}>
                <Router history={history}>
                    <Route history={history} path="/" component={Wrapper}>
                        <IndexRoute history={history} component={Main} />
                        <Route history={history} path="feed" component={Feed} />
                        <Route history={history} path="singleItem/:id" component={SingleItem} />
                        <Route history={history} path="*" component={NoMatch} />
                    </Route>
                </Router>
            </Provider>
        </MuiThemeProvider>
    );
};

export default Root;
