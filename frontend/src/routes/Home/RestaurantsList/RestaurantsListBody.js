import React from 'react';

import food7 from './food7.jpg';
import food8 from './food8.jpg';
import food9 from './food9.jpg';
import StarRateIcon from '@material-ui/icons/StarRate';
// import { RestaurantDetailsContainer } from '../RestaurantDetails/RestaurantDetailsContainer';

class RestaurantsListBody extends React.Component {

    render() {

        const {listOfRestaurants, openOnly, area} = this.props;

        // when listOfRestaurants.length % 3 !== 0, then last row has items centered
        // adding dummy items to the list fixes this issue
        let excessFrom3 = listOfRestaurants.length % 3;
        const listOfRestaurantsAlligned = [...listOfRestaurants];
        while (excessFrom3 % 3 !== 0) {
            listOfRestaurantsAlligned.push({dummy: true, key: excessFrom3});
            excessFrom3++;
        }

        return (
            <div style={{
                width: '100%',
                margin: '1rem 0rem 2rem 0rem',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'flex-start',
                justifyContent: 'space-between'
            }}>
                {listOfRestaurantsAlligned.map((restaurant, index) => {

                    if (restaurant.dummy) {
                        return <div key={restaurant.key} style={{width: '29.5%'}}/>;
                    }

                    let backgroundImageUrl;
                    switch (index%3) {
                        case 0:
                            backgroundImageUrl = `url(${food7})`;
                            break;
                        case 1:
                            backgroundImageUrl = `url(${food8})`;
                            break;
                        case 2:
                            backgroundImageUrl = `url(${food9})`;
                            break;
                        default:
                            break;
                    }

                    const restaurantDiv = (
                        <div
                            key={restaurant.name}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '29.5%',
                                margin: '0%',
                                marginBottom: '3%',
                            }}
                        >
                            <div 
                                onClick={() => {this.props.onRestaurantClickHandler(restaurant.name);}} 
                                style={{
                                    backgroundImage: backgroundImageUrl,
                                    backgroundSize: '100% 105%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: !restaurant.open && 'grey',
                                    width: '100%',
                                    height: '0px',
                                    paddingTop: '85%',
                                    border: '1px solid gray',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    opacity: restaurant.open ? 1 : 0.25
                                }}>
                                
                            </div>
                            <div style={{
                                paddingTop: '1%',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                fontSize: '1rem',
                            }}>
                                <div 
                                    
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <div 
                                        onClick={() => {this.props.onRestaurantClickHandler(restaurant.name);}}
                                        style={{
                                            fontSize: '1.3rem',
                                            fontWeight: 'bold',
                                            fontStyle: 'italic',
                                            cursor: 'pointer',
                                        }}
                                    >{restaurant.name}</div>
                                    <div style={{display: 'flex', fontStyle: 'italic'}}>
                                        <div style={{paddingTop: '0.15rem'}}>{restaurant.rating}</div>
                                        <StarRateIcon style={{color: 'gold'}}/>
                                    </div>
                                    
                                </div>
                                <div>({restaurant.area})</div>
                                <div style={{color: restaurant.open ? 'black' : 'red'}}>{restaurant.open ? 'OPEN' : 'CLOSED'}</div>
                            </div>
                        </div>
                    );

                    if (
                        openOnly && !restaurant.open || area !== '-' && restaurant.area !== area 
                    ) {
                        return undefined;
                    } else {
                        return restaurantDiv;
                    }
                })}
            </div>
        );
    }
}

export {RestaurantsListBody};
