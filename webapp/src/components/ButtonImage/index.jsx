import React from 'react'
import './index.css'
import Image from '../ImageContainer'

export default function ButtonImage (props) {
    let style = {}
    let index = 0
    const width = 30
    if(props.position === 'right') {
        style.float = 'right'
        index = 1
    } else {
        style.float = 'left'
    }

    let properties = Object.assign({}, props)
    delete properties.position

    return (
        <div
            style={style}
            className={'option-image-scroller'}>
            <ImageContainer
                x={index}
                y={0}
                width={width}
                height={width}
                backgroundHeight={width}
                archive={'img/buttons.png'}
            />
        </div>
    )
}