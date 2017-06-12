import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Actions from '../../redux/actions/';
import AppBar from 'material-ui/AppBar';

class Wrapper extends React.Component {
    render() {
        const { children, selectedId } = this.props;
        return (
            <div>
                <AppBar title={selectedId} />
                {children}
            </div>
        );
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
