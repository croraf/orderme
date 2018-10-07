import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {TitleRow} from './TitleRow';

const mapStateToProps = (state) => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
    onLogoutHandler: () => {
        localStorage.removeItem('auth_token');
        dispatch(push('/'));
    },
    onCartClickHandler: (cart) => {
        alert('cart content:' + JSON.stringify(cart));
    }
});



const TitleRowContainer = connect(mapStateToProps, mapDispatchToProps)(TitleRow);

export {TitleRowContainer};
