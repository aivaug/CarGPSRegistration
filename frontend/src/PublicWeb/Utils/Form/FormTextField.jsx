import React from 'react';
import TextField from 'material-ui/TextField';

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => (
    <TextField
        hintText={label}
        floatingLabelStyle={{color: '#fff'}}
        floatingLabelText={label}
        className="white-text"
        underlineStyle={{ borderColor: '#ffffff' }}
        style={{"color":"#ffffff"}}
        id="WhiteText"
        errorText={touched && error}
        {...input}
        {...custom}
    />
)

export default renderTextField