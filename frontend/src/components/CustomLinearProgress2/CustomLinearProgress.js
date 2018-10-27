
// tying some alternative Linear Progress.

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    basic: {
        backgroundColor: 'red',
        borderRadius: '10px',
        width: '0%',
        height: '0px'
    },
    hidden: {
        width: '0%',
        height: '0px'
    },
    full: {
        width: '100%',
        height: '6px',
        transition: 'width 20s',
        transitionTimingFunction: 'linear'
    }
};

class CustomLinearProgress extends React.Component {

    state = {
        mounted: false
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                mounted: true
            });
        }, 50);
        
    }

    render() {
        const {classes, orderStatus} = this.props;

        let classNameResolved = classes.basic;
        if (this.state.mounted === true) {
            classNameResolved += ' ' + classes.full;
        }

        return (
            <div style={{
                marginBottom: '5px'
            }}>
                <div className={classNameResolved}></div>
            </div>
        );
    }
}

export default withStyles(styles)(CustomLinearProgress);