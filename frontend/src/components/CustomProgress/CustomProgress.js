
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    progressBar: {
        height: '5px',
        backgroundColor: '#3f51b5',
        animation: 'progress 30s 1 linear'
    },
    '@keyframes progress': {
        '0%': {
            width: '0%'
        },
        '100%': {
            width: '100%'
        },
    },

};

const calculateProgress = (initialTimestamp, duration) => {
    // console.log(Date.now() - initialTimestamp);
    const diffInMillis = Date.now() - initialTimestamp;
    const progress = Math.ceil(diffInMillis / 10 / duration);
    return Math.min(progress, 100);
};


class CustomLinearProgress extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            mounted: false
        };
        this.myRef = React.createRef();
    }

    componentDidMount = () => {
        this.myRef.current.getClientRects();
        this.setState({
            mounted: true
        });
    }

    componentWillUnmount = () => {
        //clearInterval(this.interval);
    }

    render() {
        const {classes, initialTimestamp, duration} = this.props;

        const initialProgress = calculateProgress(initialTimestamp, duration);

        return (
            <div style={{
                marginBottom: '5px'
            }}>
                <div 
                    className={classes.progressBar}
                    ref={this.myRef}
                />
            </div>
        );
    }
}

export default withStyles(styles)(CustomLinearProgress);