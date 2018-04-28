import React from 'react'

export default function Button(props) {
  const classes = props.primary ?
    'pure-button pure-button-primary' :
    'pure-button'

  const styles = {
    boxSizing: 'border-box',
    backgroundColor: props.primary ? '#2c80b9' : '#e6e6e6',
    float: props.primary ? 'right' : 'left',
    marginTop: '10px',
    width: '120px',
    height: '38px'
  }

  return (
    <button
      className={ classes }
      style={ styles }
      onClick={ props.onClick }
    >
      { props.text }
    </button>
  )
}
