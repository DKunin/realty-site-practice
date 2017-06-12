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
import InputRange from 'react-input-range';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.handleChooseCard = this.handleChooseCard.bind(this);
        this.state = {
          value: { min: 2, max: 10 },
        };
    }

    render() {
        const { auth } = this.props;

        return (
            <div>
                <InputRange
                    maxValue={20}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })} />
                <div style={{display : 'flex'}}>
                  

                    <Card style={{width: '50%'}}>
                        <CardTitle title='Шокальского, ул. д.2 кв. 109' subtitle='89 кв.м' />
                        <CardMedia>
                          <img src="http://www.fillmurray.com/200/100" alt="" />
                        </CardMedia>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa.
                            <div><strong>100 000 р</strong></div>
                        </CardText>
                        <CardActions>
                            <FlatButton label='Посмотреть' onTouchTap={this.handleChooseCard}/>
                        </CardActions>
                    </Card>                <Card style={{width: '50%'}}>
                        <CardTitle title='Шокальского, ул. д.2 кв. 109' subtitle='89 кв.м' />
                        <CardMedia>
                          <img src="http://www.fillmurray.com/200/100" alt="" />
                        </CardMedia>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa.
                            <div><strong>100 000 р</strong></div>
                        </CardText>
                        <CardActions>
                            <FlatButton label='Посмотреть' onTouchTap={this.handleChooseCard}/>
                        </CardActions>
                    </Card>
                </div>
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