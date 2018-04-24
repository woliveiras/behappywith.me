import React from 'react'

export default function Label(props) {

  const style = {
    color: props.isInvalid ? '#d50000' : '#444444'
  }

  return (
    <label
      style={ style }
      htmlFor={ props.forAttr }>
      { props.text }
    </label>
  )
}
