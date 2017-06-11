import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Actions from '../redux/actions/';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    textAlign: 'center',
    display: 'inline-block',
    padding: '20px'
};

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nodes = {};

    }

    render() {
        return (
            <div>
                <Paper style={style} zDepth={1}>
                    <form onSubmit={this.handleSubmit} ref={(form) => {this.nodes.form = form}}>
                        <TextField
                            hintText="Login"
                            floatingLabelText="Login"
                            name="login"
                        />
                        <br />
                        <TextField
                            name="password"
                            hintText="Password Field"
                            floatingLabelText="Password"
                            type="password"
                        />
                        <br />
                        <br />
                        <RaisedButton label="Login" type="submit" fullWidth />
                    </form>
                </Paper>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        const { login } = this.nodes.form.elements;
        this.props.authorise(login.value);
        this.props.route.history.push('/feed');
    }
}

Main.propTypes = {};

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