import * as React from 'react'
import FormInput from './FormInput'

const InputComponent = ({ label, value, name, onChange, type, inputProps, ...rest }) => (
  <React.Fragment>
    <label htmlFor={name} className="col-sm-3 col-form-label">{label}</label>
    <div className="col-sm-8">
      <input type={type ? type : "text"}
        className="form-control"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        name={name}
        {...inputProps} />
    </div>
  </React.Fragment>
)

const CheckboxComponent = ({ label, value, name, onChange, inputProps, ...rest}) => (
  <React.Fragment>
    <input type="checkbox"
      className="form-check-input"
      onChange={(e) => onChange(e.target.checked)}
      value={value}
      name={name}
      {...inputProps} />
    <label htmlFor={name} className="col-form-label">{label}</label>
  </React.Fragment>
)

export const InputSwitch = (props) => {
  if (props.inputType === 'checkbox')
    return <CheckboxComponent {...props} />
  else
    return <InputComponent {...props} />
}

export const inputHasValue = (value, inputType) => {
  return (
    (value === false && inputType === "checkbox") || (value === "" && inputType === "input")
  )
}

export const defaultInputValue = (exportedInputType) => {
  return exportedInputType === 'Checkbox' ? false : ""
}

export const Input = (props) => <FormInput inputType="input" {...props} />

export const Password = (props) => <FormInput inputType="input" type="password" {...props} />

export const Checkbox = (props) => <FormInput inputType="checkbox" {...props} />
