import React from 'react';

import TextField from '@material-ui/core/TextField';

class DeliveryData extends React.Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    width: '49%'
                }}>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        style={{width: '100%'}}
                        value='John Doe'
                        /* onChange={this.handleChange('name')} */
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Phone number"
                        style={{width: '100%'}}
                        value='095xxxxxxx9'
                        /* onChange={this.handleChange('name')} */
                        margin="normal"
                        variant="outlined"
                    />
                </div>

                <div style={{
                    width: '49%'
                }}>
                    <TextField
                        id="outlined-name"
                        label="Street and Number"
                        style={{width: '100%'}}
                        value='Ilica 239'
                        /* onChange={this.handleChange('name')} */
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="City"
                        style={{width: '100%'}}
                        value='Zagreb'
                        /* onChange={this.handleChange('name')} */
                        margin="normal"
                        variant="outlined"
                    />
                </div>
            </div>
        );
    }
}

export {DeliveryData};
