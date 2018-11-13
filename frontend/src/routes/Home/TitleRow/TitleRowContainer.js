import {connect} from 'react-redux';
import {loginButtonHandler} from 'Modules/login';
import {TitleRow} from './TitleRow';

const mapStateToProps = (state) => ({
    loginStatus: state.login.token
});

const mapDispatchToProps = (dispatch) => ({
    logoutButtonHandler: () => {
        dispatch({type: 'logout'});
    },
    loginButtonHandler: () => {
        dispatch(loginButtonHandler());
    }
});



const TitleRowContainer = connect(mapStateToProps, mapDispatchToProps)(TitleRow);

export {TitleRowContainer};
