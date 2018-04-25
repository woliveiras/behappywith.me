import React from 'react'
import Label from '../Label'
import Input from '../Input'
import GenderImage from '../GenderImage'

class NewUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: ''
      },
      validation: {
        isInvalidName: false
      }
    }
  }

  updateName = (e) => {
    const user = this.state.user
    user.name = e.target.value

    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label
            forAttr="name"
            text="Qual o seu nome?"
            isInvalid={ this.state.isInvalidName }
          />
          <Input
            id="name"
            placeholder="Digite seu nome"
            maxLength="40"
            readOnly={ false }
            isValid={ this.state.validation.isInvalidName }
            defaultValue={ this.state.user.name }
            onChange={ this.updateName }
          />
          <GenderImage
            gender='f'
          />
        </form>
      </div>
    )
  }
}

export default NewUser
