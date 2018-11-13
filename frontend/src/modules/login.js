


const loginReducer = (state = {token: undefined, name: undefined}, action) => {
    switch (action.type) {
        case 'logout':
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            return {token: undefined, name: undefined};
        case 'login':
            localStorage.setItem('token', action.token);
            return {token: action.token, name: action.name};
        default:
            return state;
    }
};

export { loginReducer };
