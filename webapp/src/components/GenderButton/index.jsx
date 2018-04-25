import React from 'react'
import './index.css'
import GenderImage from '../GenderImage'

export default function GenderButton(props) {
  return (
    <a
      className={
        props.selected ?
          "gender-button selected-gender-button" :
          "gender-button"
      }
      href="#!"
      onClick={e => props.updateGender(e, props.gender)}
    >
      <GenderImage
        gender={props.gender}
      />
    </a>
  )
}
