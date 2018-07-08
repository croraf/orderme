import React from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class FilterMenu extends React.Component {

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (event) => {
        console.log(event);
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const { menuItems, menuName, selected } = this.props;

        return (
            <div style={{
                width: '200px',
                textAlign: 'center'
            }}>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    {menuName}: {selected}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {menuItems.map(item => (
                        <MenuItem key={item} onClick={this.handleClose}>{item}</MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export {FilterMenu};
