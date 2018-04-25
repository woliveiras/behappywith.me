import React from 'react'

class ImageContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  handleXPosition() {
    return `${this.props.x * this.props.width * (-1)}px`
  }

  handleYPosition() {
    return `${this.props.y * this.props.height * (-1)}px`
  }

  widthCalculate() {
    return `auto ${this.props.backgroundHeight}px`
  }

  getStyles() {
    return {
      backgroundImage: `url(${this.props.file})`,
      backgroundPositionX: this.handleXPosition(),
      backgroundPositionY: this.handleYPosition(),
      backgroundSize: this.widthCalculate(),
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      display: 'table',
      margin: '0 auto'
    }
  }

  render() {
    return (
      <div style={ this.getStyles() }></div>
    )
  }
}

export default ImageContainer
