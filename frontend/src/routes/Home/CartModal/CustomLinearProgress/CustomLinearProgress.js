
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
        transitionDuration: '0.46s'
    }
};

const calculateProgress = (initialTimestamp, duration) => {
    // console.log(Date.now() - initialTimestamp);
    const diffInMillis = Date.now() - initialTimestamp;
    return Math.ceil(diffInMillis / 10 / duration);
};


class CustomLinearProgress extends React.Component {

    state = {
        progress: calculateProgress(this.props.initialTimestamp, this.props.duration),
        tick: 0
    }

    componentDidMount = () => {
        this.interval = setInterval(() => {
            // console.log('custom linear progress tick');
            const currentProgress = calculateProgress(this.props.initialTimestamp, this.props.duration);
            this.setState({
                progress: currentProgress,
                tick: this.state.tick + 1
            });

            this.props.fetchOrderStatusHandler(this.props.orderId);

            if (currentProgress >= 100) {
                clearInterval(this.interval);
            }

        }, 500);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    componentWillReceiveProps = (nextProps) => {
        const {orderStatus} = nextProps;
        if (orderStatus === 'CANCELED') {
            clearInterval(this.interval);
        }
    }

    render() {
        const {classes, orderStatus} = this.props;

        /* let color;
        switch (orderStatus) {
            case 'CANCELED':
                color = classes.colorFail;
                break;
            case 'AWAITING CONFIRMATION':
                break;
            default:
                break;
        } */

        return (
            <div style={{
                marginBottom: '5px'
            }}>
                {/* <LinearProgress 
                    variant="determinate"
                    value={this.state.progress} 
                    classes={{bar1Determinate: classes.bar1Determinate }}
                /> */}
            </div>
        );
    }
}

export default withStyles(styles)(CustomLinearProgress);