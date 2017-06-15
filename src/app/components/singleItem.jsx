import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../redux/actions/';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './singleItem.css';

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
        const { items, selectedId } = this.props;
        const { address, area, price } = (items || []).find(({ _id }) => _id === selectedId);

        return (
            <div className={styles.item}>
                <Paper className={styles.paper} zDepth={1}>
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
                <Paper className={styles.paper} zDepth={1}>
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
            <form onSubmit={this.handleSubmit} ref={(form) => {this.nodes.form = form;}}>
                <div>
                    <TextField
                        hintText="Имя"
                        floatingLabelText="Имя"
                        name="login"
                    />
                </div>

                <div>
                    <TextField
                        name="phone"
                        hintText="Телефон"
                        floatingLabelText="Телефон"
                    />
                </div>

                <div>
                    <RaisedButton label="отправить" type="submit" fullWidth />
                </div>
            </form>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitInfo(this.nodes.form);
    }
}

SingleItem.propTypes = {
    items: PropTypes.array.isRequired,
    selectedId: PropTypes.string.isRequired,
    selectItem: PropTypes.func.isRequired,
    submitInfo: PropTypes.func.isRequired
};

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
