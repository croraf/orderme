import {connect} from 'react-redux';

import {Home} from './Home';
import {postAuthentication} from 'Modules/login';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    checkAuthenticationAndLoadUserData: async () => {
        const jwtToken = localStorage.getItem('token');
        if (jwtToken) {
            postAuthentication(dispatch, jwtToken);
        }
    }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export {HomeContainer};
