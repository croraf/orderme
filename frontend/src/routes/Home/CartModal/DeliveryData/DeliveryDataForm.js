import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { CustomInput } from 'Components/CustomInput';

class DeliveryDataForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    <Field name='name' component={CustomInput} label='Name'/>
                    <Field name='floor' component={CustomInput} label='Floor' style={{width: '20%'}}/>
                    <Field name='city' component={CustomInput} label='City' style={{width: '29%'}}/>
                    <Field name='street' component={CustomInput} label='Street and Number'/>
                    <Field name='phone' component={CustomInput} label='Phone'/>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'deliveryData',
    initialValues: {
        name: 'Fran Banek',
        floor: '3',
        city: 'Zagreb',
        phone: '095857xxx9',
        street: 'Ilica 239',
    }
})(DeliveryDataForm);
