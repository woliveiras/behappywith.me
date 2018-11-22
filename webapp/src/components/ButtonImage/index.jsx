import React from 'react'
import './index.css'
import ImageContainer from '../ImageContainer'

export default function ButtonImage (props) {
    let style = {}
    let index = 0
    const width = 30
    if(props.position === 'right') {
        style.float = 'right'
        index = 1
    } else {
        style.float = 'left'
        index = 0
    }

    let properties = Object.assign({}, props)
    delete properties.position

    return (
        <div
            style={style}
            className={'option-image-scroller'}
            {...properties}>
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