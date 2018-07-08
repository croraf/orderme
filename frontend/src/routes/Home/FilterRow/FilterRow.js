import React from 'react';

import {FilterMenu} from './FilterMenu';
import {FilterSwitch} from './FilterSwitch';

class FilterRow extends React.Component {

    render() {
        const {openOnly, area, sortBy, openOnlyToggleHandler, filterAreaHandler, filterSortByHandler} = this.props;

        return (
            <div style={{
                width: '100%',
                margin: '10px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left'
            }}>
                <FilterMenu selected={area} menuName={'Select area'} menuItems={['Centar', 'Trešnjevka', 'Trnje']} filterHandler={filterAreaHandler}/>
                <FilterMenu selected={sortBy} menuName={'Sort by'} menuItems={['Rating', 'Delivery speed']} filterHandler={filterSortByHandler}/>
                <FilterSwitch openOnly={openOnly} openOnlyToggleHandler={openOnlyToggleHandler}/>
            </div>
        );
    }
/*     render() {

        const {lettersRowText} = this.props; 

        return (
            
            <div style={{
                width: '100%',
                margin: '10px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left'
            }}>
                <div style={{marginLeft: '10px'}}>SelectArea</div>
                <div style={{marginLeft: '10px'}}>SortBy</div>
                <div style={{marginLeft: '10px'}}>OpenOnly</div>
            </div>
        );
    } */
}

export {FilterRow};
