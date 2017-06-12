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
    padding: '20px',
    width: '50%'
};


class SingleItem extends React.Component {
    constructor(props) {
        super(props);
        this.nodes = {};
    }
    render() {
        return (
            <div style={{ display: 'flex',  alignItems: 'stretch', height: '80%' }}>
                <Paper style={style} zDepth={1}>
                    <div>
                        Адрес
                    </div>
                    <div>
                        Площадь
                    </div>
                    <div>
                        Стоимость
                    </div>
                </Paper>
                <Paper style={style} zDepth={1}>
                    <form onSubmit={this.handleSubmit} ref={(form) => {this.nodes.form = form}}>
                        <TextField
                            hintText="Имя"
                            floatingLabelText="Имя"
                            name="login"
                        />
                        <br />
                        <TextField
                            name="password"
                            hintText="Телефон"
                            floatingLabelText="Телефон"
                        />
                        <br />
                        <br />
                        <RaisedButton label="отправить" type="submit" fullWidth />
                    </form>
                </Paper>
            </div>
        );
    }
}

SingleItem.propTypes = {};

const mapStateToProps = state => {
    return state.app;
};

const mapDispatchToProps = dispatch => {
    return {
        reset: () => {
            dispatch(Actions.resetApp());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
