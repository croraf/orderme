import React from 'react';
import Button from '@material-ui/core/Button';
import {MainMenuContainer} from './MainMenu/MainMenuContainer';
import { CartButtonContainer } from './CartButton/CartButtonContainer';

class TitleRow extends React.Component {
    render() {
        const {loginStatus, loginButtonHandler, logoClickedHandler} = this.props;

        return (
            <div style={{
                width: '100%',
                margin: '15px 0px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <div 
                    onClick={logoClickedHandler}
                    style={{
                        fontSize: '3rem',
                        width: '33%',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    order.me
                </div>

                
                <div style={{width: '33%', display: 'flex', justifyContent: 'flex-end'}}>
                    <CartButtonContainer />
                    {
                        loginStatus ? 
                            <MainMenuContainer /> :
                            <Button style={{height: '75%', margin: 'auto 0px', width: '33%', padding: '0rem'}} variant='outlined' color='secondary' onClick={loginButtonHandler}>Log in</Button>
                    }
                </div>
            </div>
        );
    }
}

export {TitleRow};
