import {connect} from 'react-redux';
import MainPersonalMenu from './MainPersonalMenu';
import {push} from 'connected-react-router';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    logoutButtonHandler: () => {
        dispatch({type: 'logout'});
    },
    onFullOrdersButtonClickHandler: () => {
        dispatch(push('/orders'));
    }
});



const MainPersonalMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MainPersonalMenu);

export {MainPersonalMenuContainer};
