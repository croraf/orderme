import React from 'react';


class TitleRow extends React.Component {
    render() {

        return (
            <div style={{
                width: '100%',
                marginTop: '20px',
                marginBottom: '20px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    fontSize: 35,
                    marginLeft: '5px'
                }}>order.me</div>
                <button onClick={this.props.onLogoutHandler}>Log out</button>
            </div>
        );
    }
}

export {TitleRow};
