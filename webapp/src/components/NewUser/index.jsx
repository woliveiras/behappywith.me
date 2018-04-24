import React from 'react'
import Label from '../Label'

class NewUser extends React.Component {
  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label forAttr="name" text="Qual o seu nome?"/>
        </form>
      </div>
    )
  }
}

export default NewUser
