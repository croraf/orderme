
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';


class CustomLinearProgress extends React.Component {

    componentDidMount = () => {
        this.inerval = setInterval(() => {
            if (this.state.progress < 100) {
                this.setState({
                    progress: this.state.progress + 1
                });
            } else {
                clearInterval(this.interval);
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

        return <LinearProgress variant="determinate" value={this.state.progress} />;
    }
}

export { CustomLinearProgress };