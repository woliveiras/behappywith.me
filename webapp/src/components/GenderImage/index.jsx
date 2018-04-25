import React from 'react'
import ImageContainer from '../ImageContainer'

export default function GenderImage(props) {
  return (
    <ImageContainer
      x={0}
      y={(props.gender === 'm') ? 0 : 1}
      width={140}
      height={140}
      backgroundHeight={280}
      file="img/avatars.png"
    />
  )
}
