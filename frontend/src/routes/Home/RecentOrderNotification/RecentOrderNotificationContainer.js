import {connect} from 'react-redux';
import { RecentOrderNotification } from './RecentOrderNotification';

const mapStateToProps = (state) => ({
    show: state.recentOrderNotification,
});

const mapDispatchToProps = () => ({

});

const RecentOrderNotificationContainer = connect(mapStateToProps, mapDispatchToProps)(RecentOrderNotification);

export {RecentOrderNotificationContainer};
