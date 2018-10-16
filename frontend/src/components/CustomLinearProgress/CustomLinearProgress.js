
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    colorAwaitingResponse: {
        backgroundColor: 'gold',
    },
    colorFail: {
        backgroundColor: 'red'
    }
};

const stepSize = 2;

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
        }, 200);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    state = {
        progress: 0
    }

    render() {
        const {classes} = this.props;

        let color;

        if (this.state.progress >= 100) {
            color = classes.colorFail;
        }

        return (
            <LinearProgress 
                variant="determinate"
                value={this.state.progress} 
                classes={{ colorPrimary: color, barColorPrimary: color }}
            />
        );
    }
}

export default withStyles(styles)(CustomLinearProgress);