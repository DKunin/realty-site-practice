import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../redux/actions/';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nodes = {};
    }

    render() {
        return (
            <div className={styles.main}>
                <Paper className={styles.paper} zDepth={1}>
                    <form onSubmit={this.handleSubmit} ref={(form) => {this.nodes.form = form;}}>
                        <div>
                            <TextField
                                hintText="Login"
                                floatingLabelText="Login"
                                name="login"
                            />
                        </div>

                        <div>
                            <TextField
                                name="password"
                                hintText="Password Field"
                                floatingLabelText="Password"
                                type="password"
                            />
                        </div>

                        <div>
                            <RaisedButton label="Login" type="submit" fullWidth />
                        </div>
                    </form>
                </Paper>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        const { login } = this.nodes.form.elements;
        const { authorise, route } = this.props;
        authorise(login.value);
        route.history.push('/feed');
    }
}

Main.propTypes = {
    auth: PropTypes.object.isRequired,
    authorise: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return state.app;
};

const mapDispatchToProps = dispatch => {
    return {
        reset: () => {
            dispatch(Actions.resetApp());
        },
        authorise: user => {
            dispatch(Actions.authorise(user));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
