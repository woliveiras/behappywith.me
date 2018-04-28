import React from 'react'
import './index.css'
import GenderImage from '../GenderImage'

export default function GenderButton(props) {
  const selectedClass =
    props.selected ?
      "gender-button selected-gender-button" :
      "gender-button"
  const isDisabledLink = props.disabled ? 'disabled-link' : ''
  const classes = `${ selectedClass } ${ isDisabledLink }`

  return (
    <a
      className={ classes }
      href="#!"
      onClick={e => props.updateGender(e, props.gender)}
    >
      <GenderImage
        gender={props.gender}
      />
    </a>
  )
}
