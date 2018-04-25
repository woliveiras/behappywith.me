import React from 'react'
import Image from '../Image'

export default function GenderImage(props) {
  return (
    <Image
      x={0}
      y={(props.genero === 'm') ? 0 : 1}
      width={140}
      height={140}
      backgroundHeight={280}
      file="img/avatars.png"
    />
  )
}
