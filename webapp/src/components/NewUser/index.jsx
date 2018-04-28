import React from 'react'
import Label from '../Label'
import Input from '../Input'
import GenderSelector from '../GenderSelector'
import Button from '../Button'

import User from '../../models/User'

class NewUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: new User(),
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

  validate(e) {
    e.preventDefault()
    const user = this.state.user
    const validation = this.state.validation

    validation.isInvalidName = !user.validateName()
    validation.isValidGender = !user.validateGender()

    this.setState({
      validation: validation
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
          <Button
            primary
            text="Próximo"
            onClick={ this.validate.bind(this) }
          />
        </form>
      </div>
    )
  }
}

export default NewUser
