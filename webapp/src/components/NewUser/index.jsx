import React from 'react'
import Label from '../Label'
import Input from '../Input'
import GenderSelector from '../GenderSelector'
import Button from '../Button'

import User from '../../models/User'

import {ERROR_MESSAGES, LABELS, PLACEHOLDERS} from './constants'

class NewUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: new User(),
      validation: {
        isInvalidName: false,
        isValidGender: false
      },
      firstViewFinally: false
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

    let message = '';
    let firstViewFinally = false

    if (validation.isInvalidName && validation.isValidGender) {
      message = ERROR_MESSAGES.allIncorrect
    } else if (validation.isInvalidName) {
      message = ERROR_MESSAGES.invalidName
    } else if (validation.isValidGender) {
      message = ERROR_MESSAGES.invalidGender
    } else {
      firstViewFinally = true;
    }
    if (!firstViewFinally) {
      this.props.error(message);
    }

    this.setState({
      validation: validation,
      firstViewFinally: firstViewFinally
    })
  }

  renderName() {
    return(
      <section>
        <Label
          forAttr="name"
          text={LABELS.name}
          isInvalid={this.state.isInvalidName}
        />
        <Input
          id="name"
          placeholder={PLACEHOLDERS.name}
          maxLength="40"
          readOnly={ this.state.firstViewFinally }
          isValid={this.state.validation.isInvalidName}
          defaultValue={this.state.user.name}
          onChange={this.updateName}
        />
      </section>
    )
  }

  renderButtons() {
    if(this.state.firstViewFinally) {
      return(
        <section>
          <Button
            text={LABELS.back}
            onClick={ e => {
              e.preventDefault()
              this.setState({
                firstViewFinally: false
              })
            }}
          />
          <Button
            primary
            text={LABELS.save}
          />
        </section>
      )
    } else {
      return(
        <section>
          <Button
            primary
            text={LABELS.next}
            onClick={this.validate.bind(this)}
          />
        </section>
      )
    }
  }

  renderGender() {
    return(
      <section>
        <Label
          text="Seu gênero:"
          isInvalid={ this.state.validation.isValidGender }
        />
        <GenderSelector
          isValid={ this.state.validation.isValidGender }
          gender={ this.state.user.gender }
          updateGender={ this.updateGender }
          isDisabled={ this.state.firstViewFinally }
        />
      </section>
    )
  }

  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          { this.renderName() }
          { this.renderGender() }
          { this.renderButtons() }
        </form>
      </div>
    )
  }
}

export default NewUser
