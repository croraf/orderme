import {connect} from 'react-redux';
import { OrderControls } from './OrderControls';



const mapStateToProps = (state) => {

    return ({
    });
};

const mapDispatchToProps = () => ({

});

const OrderControlsContainer = connect(mapStateToProps, mapDispatchToProps)(OrderControls);

export {OrderControlsContainer};
