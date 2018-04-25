import React from 'react'
import Label from '../Label'
import Input from '../Input'
import GenderSelector from '../GenderSelector'

class NewUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: '',
        gender: ''
      },
      validation: {
        isInvalidName: false,
        isValidGender: false
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

  updateGender = (e, gender) => {
    e.preventDefault()
    const user = this.state.user
    user.gender = gender

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
          <Label
            text="Seu gênero:"
            isInvalid={ this.state.validation.isValidGender }
          />
          <GenderSelector
            isValid={ this.state.validation.isValidGender }
            gender={ this.state.user.gender }
            updateGender={ this.updateGender }
          />
        </form>
      </div>
    )
  }
}

export default NewUser
