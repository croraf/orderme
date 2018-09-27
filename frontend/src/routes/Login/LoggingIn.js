import React from 'react';

class LoggingIn extends React.Component {


    render() {

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: '200px'
            }}>
                <div 
                    style={{
                        color: 'white',
                        fontSize: '30px'
                    }}
                >
                    ... logging in ...
                </div>;
            </div>
        );
    }
}

export { LoggingIn };
