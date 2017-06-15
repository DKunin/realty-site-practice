import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Actions from '../../redux/actions/';
import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';

import styles from './wrapper.css';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.handleExitTap = this.handleExitTap.bind(this);
        this.handleHomeTap = this.handleHomeTap.bind(this);
    }

    render() {
        const { children, selectedId, auth } = this.props;
        return (
            <div>
                <AppBar
                    title={selectedId}
                    iconElementLeft={(auth.login ? <IconButton><ArrowBackIcon/></IconButton> : <span/>)}
                    iconElementRight={(auth.login ? <IconButton><ExitIcon/></IconButton> : null)}
                    onLeftIconButtonTouchTap={this.handleHomeTap}
                    onRightIconButtonTouchTap={this.handleExitTap}
                />
                {children}
            </div>
        );
    }

    handleHomeTap() {
        window.history.back();
    }

    handleExitTap() {
        this.props.reset();
        this.props.route.history.push('/');
    }
}

Wrapper.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
