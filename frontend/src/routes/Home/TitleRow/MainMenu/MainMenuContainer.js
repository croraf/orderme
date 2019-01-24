import {connect} from 'react-redux';
import MainMenu from './MainMenu';
import {push} from 'connected-react-router';

import {logoutHandler} from 'Modules/login';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    logoutButtonHandler: () => {
        dispatch(logoutHandler());
    },
    onFullOrdersButtonClickHandler: () => {
        dispatch(push('/orders'));
    }
});



const MainMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MainMenu);

export {MainMenuContainer};
