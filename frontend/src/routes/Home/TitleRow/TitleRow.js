import React from 'react';
import Button from '@material-ui/core/Button';
import { CartModalContainer } from '../CartModal/CartModalContainer';
import {MainPersonalMenuContainer} from './MainPersonalMenuContainer';

class TitleRow extends React.Component {
    render() {
        const {loginStatus, loginButtonHandler} = this.props;

        return (
            <div style={{
                width: '99%',
                margin: '20px 0px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    fontSize: '35px'
                }}>order.me</div>

                <CartModalContainer />
                {/* <Button variant='outlined' color='secondary' onClick={logoutButtonHandler}>Log out</Button> */}
                {
                    loginStatus ? 
                        <MainPersonalMenuContainer /> :
                        <Button variant='outlined' color='secondary' onClick={loginButtonHandler}>Log in</Button>
                }
            </div>
        );
    }
}

export {TitleRow};
