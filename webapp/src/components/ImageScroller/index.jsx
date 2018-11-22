import React from 'react'
import Image from '../ImageContainer'
import ButtonImage from '../ButtonImage'
import EventHanler from './EventHandler'

class ImageScroller extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            EventHanler: new EventHanler(
                this.props.elements.length,
                this.props.selected.index
            )
        }
    }

    getSelectedElement() {
        return this.props.elements[
            this.state.EventHanler.index
        ]
    }

    ButtonImageRender(position) {
        return (
            <ButtonImage                             
                position={position}

                onTouchStart={e => e.stopPropagation()}
                onTouchMove={e => e.stopPropagation()}
                onTouchEnd={e => e.stopPropagation()}

                onClick={e => {
                    e.preventDefault();
                    let EventHanler = this.state.EventHanler;
                    let index = EventHanler.index;
                    if (position == 'left') {
                        index += -1;
                    } else {
                        index += 1;
                    }
                    EventHanler.defineIndex(index);
                    EventHanler.updateClick();
                    
                    this.setState({ EventHanler: EventHanler },() => {
                        this.props.onChange(this.getSelectedElement());
                    });
                }}
            />
        )
    }

    selectedRender() {
        return (
            <span
                style={{
                    float: 'left',
                    width: '140px',
                    height: '160px',
                    marginLeft: '42px',
                    backgroundColor: '#00C853',
                    position: 'relative',
                    zIndex: -2
                }}
            ></span>
        )
    }

    imageRender(entry,index) {
        let y = this.props.y ? this.props.y : 0;
        debugger
        return (
            <li style={{
                paddingTop: '8px',
                position: 'absolute',
                zIndex: '-1',
                marginLeft: `${index * 140}px`
            }} key={index + entry.toString()}>
                <Image
                    x={entry.index}
                    y={y}
                    width={140}
                    height={140}
                    backgroundHeight={280}
                    archive={this.props.archive}
                />
            </li>
        )   
    }

    imagesRender() {
        const ms = this.state.EventHanler.currentTouch
            ? '100ms' : '800ms'

        const style = {
            WebkitTransitionDuration: ms, /* Safari e Chrome */
            MsTransitionDuration: ms, /* IE */
            MozTransitionDuration: ms, /* Firefox */
            OTransitionDuration: ms, /* Opera */
            transitionDuration: ms, /* Nativa do W3C */

            listStyleType: 'none',
            margin: '0',
            padding: '0',
            position: 'relative',
            width: `${this.props.elements.length * 140}px`,
            left: `${this.state.EventHanler.left}px`
        }
        
        const lista = this.props.elements.map(
            (entry,index) => this.imageRender(entry,index)
        );

        return (
            <ul style={style}>                
                {lista}
            </ul>            
        )
    }

    imageScrollerRender() {
        const style = {
            boxSizing: 'border-box',
            borderWidth: '1px',
            borderBottomWidth: '0',
            borderStyle: 'solid',            
            borderColor: '#cccccc',
            borderRadius: '5px',   
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',            
            width: '310px',
            height: '160px',
            overflow: 'hidden'        
        };
                
        return (
            <div
                style={style}
                onTouchStart={this.onTouchStart.bind(this)}
                onTouchMove={this.onTouchMove.bind(this)}
                onTouchEnd={this.onTouchEnd.bind(this)}
            >                
                {this.ButtonImageRender('left')}
                {this.selectedRender()}
                {this.imagesRender()}
                {this.ButtonImageRender('right')}
            </div>
        )
    }

    labelRender() {
        const style = {
            boxSizing: 'border-box',            
            borderWidth: '1px',
            borderStyle: 'solid',
            borderTopWidth: '0',
            borderColor: '#cccccc',
            borderRadius: '5px',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',            
            backgroundColor: '#cccccc',
            color: '#444444',
            fontSize: '20px',
            textAlign: 'center',
            padding: '5px',
            width: '310px'
        };

        return (
            <div style={style}>
                {this.getSelectedElement().toString()}
            </div>
        )
    }

    onTouchStart(e) {
        let clientX = e.targetTouches[0].clientX;
        let EventHanler = this.state.EventHanler;
        EventHanler.start(clientX);
        this.setState({ EventHanler: EventHanler });
    }

    onTouchMove(e) {        
        let clientX = e.targetTouches[0].clientX;
        let EventHanler = this.state.EventHanler;
        EventHanler.move(clientX);
        this.setState({ EventHanler: EventHanler });   
    }

    onTouchEnd(e) {
        let EventHanler = this.state.EventHanler;
        EventHanler.updateTouch();
        this.setState({ EventHanler: EventHanler },() => {
            this.props.onChange(this.getSelectedElement());
        });
    }

    render() {
        return (
            <div>
                {this.imageScrollerRender()}
                {this.labelRender()}
            </div>
        )
    }
}

export default ImageScroller;