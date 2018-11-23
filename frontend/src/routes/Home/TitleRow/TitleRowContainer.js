import {connect} from 'react-redux';
import {loginButtonHandler} from 'Modules/login';
import {TitleRow} from './TitleRow';
import {push} from 'connected-react-router';

const mapStateToProps = (state) => ({
    loginStatus: state.login.token
});

const mapDispatchToProps = (dispatch) => ({
    loginButtonHandler: () => {
        dispatch(loginButtonHandler());
    },
    logoClickedHandler: () => {
        dispatch(push('/'));
    }
});



const TitleRowContainer = connect(mapStateToProps, mapDispatchToProps)(TitleRow);

export {TitleRowContainer};
