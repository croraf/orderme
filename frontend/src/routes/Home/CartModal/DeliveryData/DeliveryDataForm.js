import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { CustomInput } from './CustomInput';

class DeliveryDataForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    <Field name='name' component={CustomInput} label='Name'/>
                    <Field name='phone' component={CustomInput} label='Phone'/>
                    <Field name='street' component={CustomInput} label='Street and Number'/>
                    <Field name='city' component={CustomInput} label='City'/>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'deliveryData',
    initialValues: {
        name: 'Fran Banek',
        phone: '095xxxxxxx9',
        street: 'Ilica 239',
        city: 'Zagreb',
    }
})(DeliveryDataForm);
