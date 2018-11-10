import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {TitleRow} from './TitleRow';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    onLogoutHandler: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        dispatch(push('/login'));
    },
});



const TitleRowContainer = connect(mapStateToProps, mapDispatchToProps)(TitleRow);

export {TitleRowContainer};
