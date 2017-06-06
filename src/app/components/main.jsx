import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Actions from '../redux/actions/';
import Input from './shared/Input';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input placeholder='Login' />
          <Input placeholder='Password' type='password' />
          <button>
            Login
          </button>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.route.history.push('/feed');
  }
}

Main.propTypes = {
}

const mapStateToProps = (state) => {
  return state.app
}

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => { dispatch(Actions.resetApp()) },
    setUser: (user) => { dispatch(Actions.setUser(user)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
