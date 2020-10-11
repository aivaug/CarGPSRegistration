import * as React from 'react'
import { defaultInputValue } from './InputComponents'

const sizes = [
  { key: 1, value: 12 },
  { key: 2, value: 6 },
  { key: 3, value: 4 },
  { key: 4, value: 3 },
  { key: -1, value: 3 },
]  

const whiteListChildTypes = [ "Connect", "Section" ]

class Form extends React.Component {
  constructor(props) {
    super(props)

    const data = {}
    const keys = []

    React.Children.map(this.props.children, (child) => {
      React.Children.map(child.props.children, (grandChild) => {
        const type = grandChild.type.name
        data[grandChild.props.name] = {
          value: defaultInputValue(type),
          isValid: !grandChild.props.required
        }

        keys.push(grandChild.props.name)
      })
    })

    this.state = {
      data: data,
      keys: keys,
    }

    this.getSectionSize = this.getSectionSize.bind(this)
    this.validateGrandChildren = this.validateGrandChildren.bind(this)
  }

  getSectionSize(childType) {
    if (!whiteListChildTypes.includes(childType)) {
      throw Object.assign(
        new Error(childType + 'is not implemented for Form.'),
        { code: 402 }
     );
    }

    const childrenCount = Array.isArray(this.props.children) ? this.props.children.length : 1 

    const size = sizes
      .filter(x => childrenCount === x.key)
      .map(x => x.value)

    return size
  }

  validateGrandChildren(child) {
    return React.Children.map(child.props.children, (grandChild) => {
      return React.cloneElement(grandChild, {
        setFormData: (key, grandChildData) => {
          const state = {
            data: {
              ...this.state.data,
              [key]: {
                ...grandChildData,
              }
            }
          }

          const allValid = this.state.keys.length === this.state.keys
            .map((key) => state.data[key].isValid)
            .filter(x => x).length

          this.setState({ data: state.data })

          if (this.props.onChange) {
            this.props.onChange(state.data)
          }

          if (this.props.isValid) {
            this.props.isValid(allValid)
          }
        },
        submitForm: () => {
          if (this.props.submit) {
            const data = this.state.keys.reduce((accu, val) => {
              if (!val) {
                return accu
              }

              const prop = this.state.data[val]
              return !prop
                ? accu
                : {
                  ...accu,
                  [val]: prop.value
                }
            }, {})
            console.debug(data)

            this.props.submit(data)
          }
        },
      })
    })
  }

  render() {
    const sections = React.Children.map(this.props.children, (child, i) => {
      const size = this.getSectionSize(child.type.name)
      
      const children = this.validateGrandChildren(child, i)

      return React.cloneElement(child, {
        sectionSize: size,
      }, children)
    })

    return (
      <div className="row">
        {sections}
      </div>
    )
  }
}

export default Form
