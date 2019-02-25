

const recentOrderNotificationReducer = (state = false, action) => {
    switch (action.type) {
        case 'showRecentOrderNotifiction':
            return true;
        case 'hideRecentOrderNotification':
            return false;
        default:
            return state;
    }
};

export { recentOrderNotificationReducer };
