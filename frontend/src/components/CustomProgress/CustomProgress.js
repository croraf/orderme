
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    progressBar: {
        height: '5px',
        backgroundColor: '#3f51b5',
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

        // Hack because componentDidMount cannot use props
        const {initialTimestamp, duration} = this.props;
        this.state = {
            initialTimestamp,
            duration
        };
    }

    componentDidMount = () => {
        const initialProgress = calculateInitialProgress(this.state.initialTimestamp, this.state.duration);
        const effectiveDuration = ((100 - initialProgress) / 100 * this.state.duration);

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

    render() {
        const {classes} = this.props;

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