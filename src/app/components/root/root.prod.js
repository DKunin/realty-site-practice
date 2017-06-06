import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Wrapper from '../../components/shared/wrapper.jsx';
import NoMatch from '../../components/shared/noMatch.jsx';
import Main from '../../components/main.jsx';
import Feed from '../../components/feed.jsx';
import SingleItem from '../../components/singleItem.jsx';

const Root = props => {
    const { store, history } = props;

    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Wrapper}>
                    <IndexRoute history={history} component={Main}/>
                    <Route path="feed" component={Feed}/>
                    <Route path="singleItem/:id" component={SingleItem}/>
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        </Provider>
    );
};

export default Root;
