import {connect} from 'react-redux';

import {Home} from './Home';
import {postAuthentication} from 'Modules/login';
import websocket from 'Modules/websocket';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    checkAuthenticationAndLoadUserData: async () => {
        const jwtToken = localStorage.getItem('token');
        if (jwtToken) {
            await websocket.initialize();
            postAuthentication(dispatch, jwtToken);
        }
    }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export {HomeContainer};
