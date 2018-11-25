import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

class MainMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleOrdersButtonClick = () => {
        this.handleClose();
        this.props.onFullOrdersButtonClickHandler();
    }

    handleLogoutButtonClick = () => {
        this.handleClose();
        this.props.logoutButtonHandler();
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <React.Fragment>
                <Button
                    style={{height: '2.5rem', margin: 'auto 0px', padding: '0rem'}}
                    variant='outlined' color='primary' 
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MenuIcon />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>My Account</MenuItem>
                    <MenuItem onClick={this.handleOrdersButtonClick}>My Orders</MenuItem>
                    <MenuItem onClick={this.handleLogoutButtonClick}>Logout</MenuItem>
                </Menu>
            </React.Fragment>
        );
    }
}

export default MainMenu;