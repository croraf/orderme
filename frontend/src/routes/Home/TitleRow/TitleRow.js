import React from 'react';
import Button from '@material-ui/core/Button';
import { CartModalContainer } from '../CartModal/CartModalContainer';
import MainPersonalMenu from './MainPersonalMenu';

class TitleRow extends React.Component {
    render() {
        const {loginStatus, logoutButtonHandler, loginButtonHandler} = this.props;

        return (
            <div style={{
                width: '99%',
                margin: '20px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    fontSize: 35
                }}>order.me</div>

                <CartModalContainer />
                {/* <Button variant='outlined' color='secondary' onClick={logoutButtonHandler}>Log out</Button> */}
                {
                    loginStatus ? 
                        <MainPersonalMenu /> :
                        <Button variant='outlined' color='secondary' onClick={loginButtonHandler}>Log in</Button>
                }
            </div>
        );
    }
}

export {TitleRow};
