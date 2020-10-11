import * as React from 'react'
import { InputSwitch, inputHasValue } from './InputComponents'
import { FormRow } from './FormRow'

export class FormInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "",
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    this.setState({ value: value })

    const requiredValidation = this.props.required
      && inputHasValue(value, this.props.inputType)

    const isValid = !requiredValidation

    this.props.setFormData(this.props.name, { value, isValid })
  }

  render() {
    return (
      <FormRow>
        <InputSwitch value={this.state.value} onChange={this.onChange} {...this.props} />
      </FormRow>
    )
  }
}

export default (FormInput)
