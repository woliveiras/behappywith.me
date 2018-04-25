import React from 'react'

export default function Input(props) {
  const styles = {
    borderColor: props.isValid ? '#d50000' : '#cccccc',
    backgroundColor: props.isValid ? '#ffcdd2' : '#ffffff'
  }

  let componentProperties = Object.assign({}, props)
  delete componentProperties.isValid

  return (
    <input
      type="text"
      style={ styles }
      { ...componentProperties }
    />
  )
}
