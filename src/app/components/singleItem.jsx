import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Actions from '../redux/actions/';

class SingleItem extends React.Component {
    render() {
        return (
            <div>
                SingleItem
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
