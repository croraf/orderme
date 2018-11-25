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
        this.setState({ anchorEl: null });
    };

    handleSelect = (item) => {
        this.handleClose();
        this.props.filterHandler(item);
    }

    render() {
        const { anchorEl } = this.state;
        const { menuItems, menuName, selected } = this.props;

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '150px',
                textAlign: 'center'
            }}>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    style={{width: '150px', padding: '0px'}}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div>{menuName}:</div>
                        <div>{selected}</div>
                    </div>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {menuItems.map(item => (
                        <MenuItem key={item} onClick={() => {this.handleSelect(item);}}>{item}</MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export {FilterMenu};
