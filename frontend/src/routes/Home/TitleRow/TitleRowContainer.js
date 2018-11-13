import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {TitleRow} from './TitleRow';

const mapStateToProps = (state) => ({
    loginStatus: state.login.token
});

const mapDispatchToProps = (dispatch) => ({
    logoutButtonHandler: () => {
        dispatch({type: 'logout'});
    },
    loginButtonHandler: () => {
        dispatch(push('/login'));
    }
});



const TitleRowContainer = connect(mapStateToProps, mapDispatchToProps)(TitleRow);

export {TitleRowContainer};
