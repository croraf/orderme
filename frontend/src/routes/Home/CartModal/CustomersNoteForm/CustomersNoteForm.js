import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { CustomInput } from 'Components/CustomInput';

class CustomersNoteForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    <Field name='note' component={CustomInput} label='Note' style={{width: '100%'}}/>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'customersNote',
    initialValues: {
        note: 'Nazvati prilikom dolaska',
    }
})(CustomersNoteForm);
