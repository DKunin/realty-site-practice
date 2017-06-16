import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import Wrapper from './wrapper.jsx';
import NoMatch from './noMatch.jsx';
import Main from './main.jsx';
import Feed from './feed.jsx';
import SingleItem from './singleItem.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.authCheck = this.authCheck.bind(this);
    }

    render() {
        const { store, history } = this.props;

        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <Router history={history}>
                        <Route history={history} path="/" component={Wrapper}>
                            <IndexRedirect to="login" />
                            <Route history={history} path="login" component={Main} />
                            <Route history={history} path="feed" component={Feed} onEnter={this.authCheck} />
                            <Route history={history} path="singleItem/:id" component={SingleItem} onEnter={this.authCheck}/>
                            <Route history={history} path="*" component={NoMatch} />
                        </Route>
                    </Router>
                </Provider>
            </MuiThemeProvider>
        );
    }

    authCheck(location, replaceWith) {
        if (!this.props.store.getState().app.auth.login) {
            replaceWith('/');
        }
    }

}

export default Root;
