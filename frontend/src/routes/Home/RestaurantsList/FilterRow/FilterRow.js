import React from 'react';

import {FilterMenu} from './FilterMenu';
import {FilterSwitch} from './FilterSwitch';

class FilterRow extends React.Component {

    render() {
        const {openOnly, area, sortBy, openOnlyToggleHandler, filterAreaHandler, filterSortByHandler} = this.props;

        return (
            <div style={{
                width: '100%',
                margin: '1rem 0rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                borderTop: '1px solid gray',
                borderBottom: '1px solid gray',
                /* borderRadius: '3px', */
            }}>
                <FilterMenu selected={area} menuName={'Selected area'} menuItems={['-', 'Centar', 'Trešnjevka', 'Trnje']} filterHandler={filterAreaHandler}/>
                <FilterMenu selected={sortBy} menuName={'Sort by'} menuItems={['Rating', 'Delivery speed']} filterHandler={filterSortByHandler}/>
                <FilterSwitch openOnly={openOnly} openOnlyToggleHandler={openOnlyToggleHandler}/>
            </div>
        );
    }
}

export {FilterRow};
