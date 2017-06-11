import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../redux/actions/';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.handleChooseCard = this.handleChooseCard.bind(this);
    }

    render() {
        const { auth } = this.props;

        return (
            <div>
                <Card>
                    <CardHeader
                        title='URL Avatar'
                        subtitle='Subtitle'
                        avatar='http://fillmurray.com/128/128'
                    />
                    <CardTitle title='Card title' subtitle='Card subtitle' />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label='Open' onTouchTap={this.handleChooseCard}/>
                    </CardActions>
                </Card>
            </div>
        );
    }

    handleChooseCard() {
        this.props.route.history.push('/singleItem/123');
        this.props.authorise(123);
    }
}

Feed.propTypes = {};

const mapStateToProps = state => {
    return state.app;
};

const mapDispatchToProps = dispatch => {
    return {
        reset: () => {
            dispatch(Actions.resetApp());
        },
        authorise: id => {
            dispatch(Actions.selectItem(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);