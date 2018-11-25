import {connect} from 'react-redux';
import MainMenu from './MainMenu';
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



const MainMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MainMenu);

export {MainMenuContainer};
