
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    colorAwaitingResponse: {
        backgroundColor: 'gold',
    },
    colorFail: {
        backgroundColor: 'red'
    },
    bar1Determinate: {
        transitionDuration: '0.1s'
    }
};

const stepSize = 0.5;

class CustomLinearProgress extends React.Component {

    componentDidMount = () => {
        this.interval = setInterval(() => {
            // console.log('custom linear progress tick');
            if (this.state.progress < 100) {
                this.setState({
                    progress: this.state.progress + 1 * stepSize
                });
            } else {
                clearInterval(this.interval);
                this.props.linearProgressFinishedHandler(this.props.restaurantId);
            }
        }, 50);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    componentWillReceiveProps = (nextProps) => {
        const {orderStatus} = nextProps;
        if (orderStatus === 'ORDER_PLACE_FAIL') {
            clearInterval(this.interval);
        }
    }

    state = {
        progress: 0
    }

    render() {
        const {classes, orderStatus} = this.props;

        let color;
        switch (orderStatus) {
            case 'ORDER_PLACE_FAIL':
                color = classes.colorFail;
                break;
            case 'AWAIT_RESTAURANT_CONFIRMATION':
                break;
            default:
                break;
        }

        return (
            <LinearProgress 
                variant="determinate"
                value={this.state.progress} 
                classes={{ barColorPrimary: color, bar1Determinate: classes.bar1Determinate }}
            />
        );
    }
}

export default withStyles(styles)(CustomLinearProgress);