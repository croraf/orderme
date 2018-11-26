import React from 'react';
import TextField from '@material-ui/core/TextField';

class CustomInput extends React.Component {
    render() {

        const {label, input} = this.props;

        return (
            <TextField
                id="outlined-name"
                label={label}
                style={{width: '49%'}}
                value={input.value}
                onChange={input.onChange}
                margin="normal"
                variant="outlined"
            />
        );
    }
}

export {CustomInput};
