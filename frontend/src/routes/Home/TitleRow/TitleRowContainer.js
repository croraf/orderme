import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {TitleRow} from './TitleRow';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    onLogoutHandler: () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('name');
        dispatch(push('/'));
    },
});



const TitleRowContainer = connect(mapStateToProps, mapDispatchToProps)(TitleRow);

export {TitleRowContainer};
