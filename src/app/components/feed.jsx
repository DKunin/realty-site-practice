import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../redux/actions/';
import {
    Card,
    CardActions,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import InputRange from 'react-input-range';
import formatNum from 'format-num';
import styles from './feed.css';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.handleChooseCard = (id) => this.handleChooseCardId.bind(this, id);
        this.processFilter = this.processFilter.bind(this);
        this.renderSingleItem = this.renderSingleItem.bind(this);
        this.state = {
            value: { min: 100000, max: 1000000 }
        };
    }

    componentDidMount() {
        this.props.loadItems();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            (this.props.items || []).length !== (nextProps.items || []).length ||
            nextState.value.min !== this.state.value.min ||
            nextState.value.max !== this.state.value.max
        );
    }

    render() {
        return (
            <div>
                <div className={styles.input_slider}>
                    <InputRange
                        maxValue={1000000}
                        minValue={100000}
                        step={50000}
                        formatLabel={value => `${formatNum(value)} ₽`}
                        value={this.state.value}
                        onChange={value => this.setState({ value })}
                    />
                </div>
                <div className={styles.items_list}>
                    {(this.props.items || []).filter(this.processFilter).map(this.renderSingleItem)}
                </div>
            </div>
        );
    }

    renderSingleItem({ _id, address, area, image, price }) {
        return (
            <Card className={styles.items_item} key={_id}>
                <CardTitle title={address} subtitle={area + ' кв.м'} />
                <CardMedia>
                  <img src={image} alt="" />
                </CardMedia>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa.
                    <div><strong>{formatNum(price)} ₽</strong></div>
                </CardText>
                <CardActions>
                    <FlatButton label='Посмотреть' onTouchTap={this.handleChooseCard(_id)}/>
                </CardActions>
            </Card>
        );
    }

    handleChooseCardId(id) {
        const { route, selectItem } = this.props;
        route.history.push('/singleItem/' + id);
        selectItem(id);
    }

    processFilter(item) {
        return item.price > this.state.value.min && item.price < this.state.value.max;
    }
}

Feed.propTypes = {
    auth: PropTypes.object.isRequired,
    selectItem: PropTypes.func.isRequired,
    loadItems: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return state.app;
};

const mapDispatchToProps = dispatch => {
    return {
        selectItem: id => {
            dispatch(Actions.selectItem(id));
        },
        loadItems: () => {
            dispatch(Actions.loadItems());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
