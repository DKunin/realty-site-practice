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

import formatNum from 'format-num';

class SingleItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nodes = {};
    }

    componentWillUnmount() {
        this.props.selectItem();
    }

    render() {
        const { address, area, price } = (this.props.items || []).find(({ _id }) => _id === this.props.selectedId);

        return (
            <div style={{ display: 'flex',  alignItems: 'stretch', height: '80%' }}>
                <Paper style={style} zDepth={1}>
                    <h1>
                        {address}
                    </h1>
                    <h2>
                        {area} кв.м
                    </h2>
                    <h1>
                        {formatNum(price)}
                    </h1>
                </Paper>
                <Paper style={style} zDepth={1}>
                    {this.renderForm()}
                </Paper>
            </div>
        );
    }

    renderForm() {
        if (this.props.formSubmitted) {
            return (
                <h5>Ваша заявка зарегистрированна, спасибо за обращение</h5>
            );
        }
        return (
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
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitInfo(this.nodes.form);
    }
}

SingleItem.propTypes = {};

const mapStateToProps = state => {
    return state.app;
};

const mapDispatchToProps = dispatch => {
    return {
        selectItem: () => {
            dispatch(Actions.selectItem(null));
        },
        submitInfo: (form) => {
            dispatch(Actions.submitInfo(form));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
