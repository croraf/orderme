
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    progressBar: {
        height: '25px',
        backgroundColor: '#3f51b5',
        borderRadius: '5px'
        //animation: 'progress 30s 1 linear'
    },
    /* '@keyframes progress': {
        '0%': {
            width: '0%'
        },
        '100%': {
            width: '100%'
        },
    }, */

};

const calculateInitialProgress = (initialTimestamp, duration) => {
    // console.log(Date.now() - initialTimestamp);
    const diffInMillis = Date.now() - initialTimestamp;
    const progress = Math.ceil(diffInMillis / 10 / duration);

    // Constrain progress to be in 0-100 range.
    return Math.max(0, Math.min(progress, 100));
};


class CustomLinearProgress extends React.Component {

    constructor (props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        const {classes} = this.props;

        return (
            <div 
                className={classes.progressBar}
                ref={this.myRef}
            />
        );
    }

    componentDidMount = () => {
        const initialProgress = calculateInitialProgress(this.props.initialTimestamp, this.props.duration);
        const effectiveDuration = ((100 - initialProgress) / 100 * this.props.duration);

        this.myRef.current.animate(
            [
                {width: initialProgress + '%'},
                {width: '100%'}
            ],
            {
                duration: effectiveDuration * 1000,
                iterations: 1
            }
        );
    }
}

export default withStyles(styles)(CustomLinearProgress);