import React from 'react'
import GenderButton from '../GenderButton'

export default function GenderSelector(props) {
  const male = props.gender === 'm'
  const female = props.gender === 'f'
  const color = props.isValid ? '#d50000' : '#cccccc'
  const styles = {
    boxSizing: 'border-box',
    border: `1px solid ${color}`,
    borderRadius: '5px',
    padding: '2px',
    paddingBottom: '0'
  }

  return (
    <div style={ styles} >
      <GenderButton
        selected={ male }
        gender={ 'm' }
        updateGender={ props.updateGender }
      />
      <GenderButton
        selected={ female }
        gender={ 'f' }
        updateGender={ props.updateGender }
      />
    </div>
  )
}
