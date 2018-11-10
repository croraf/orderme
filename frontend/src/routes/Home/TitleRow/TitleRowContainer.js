import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {TitleRow} from './TitleRow';

const mapStateToProps = (state) => ({
    loginStatus: localStorage.getItem('token')
});

const mapDispatchToProps = (dispatch) => ({
    logoutButtonHandler: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        dispatch(push('/login'));
    },
    loginButtonHandler: () => {
        dispatch(push('/login'));
    }
});



const TitleRowContainer = connect(mapStateToProps, mapDispatchToProps)(TitleRow);

export {TitleRowContainer};
