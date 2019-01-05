
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    progressBar: {
        height: '5px',
        backgroundColor: '#3f51b5',
        //borderRadius: '3px',
        //border: '1px solid black',
    }

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

    componentWillReceiveProps = (nextProps) => {
        /* const {orderStatus} = nextProps;
        if (orderStatus === 'CANCELED') {
            clearInterval(this.interval);
        } */
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
                    style={{
                        width: this.state.mounted ? '100%' : initialProgress + '%',
                        transition: 'width 10s linear 0s',
                        transitionDuration: ((100 - initialProgress) / 100 * duration) + 's'
                    }} />
            </div>
        );
    }
}

export default withStyles(styles)(CustomLinearProgress);