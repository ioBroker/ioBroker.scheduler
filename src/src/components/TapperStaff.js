import React, { Component } from "react";
import chroma from 'chroma-js';

class TapperStaff extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            ...props,
            pageY: -1,
            isDrag : false
        }
    }
    onDragStart = evt =>
    {
        const d = document.getElementById( "tapper" );
        const rect =  d.getBoundingClientRect( );
        console.log( rect );
        console.log( evt.pageY );
        console.log( rect.bottom - this.state.offsetY - evt.pageY );
        this.setState( { pageY : rect.bottom - this.state.offsetY - evt.pageY } )
    }
    onDragEnd = evt =>
    {
        
    }
    onDrag = evt =>
    {
        
    }
    render()
    {
        const {
            i,
            data,
            width,
            offsetX,
            offsetY,
            backgroundColor,
            borderRadius,
            min,
            max,
            backgrounds
        }= this.state;
        const height = ( 500 - offsetX ) / ( max - min ) * data + 5;  
        return <div 
            className="tapper-element-container"
            style={{
                width,
                height,
                bottom : offsetY,
                left: offsetX * i + offsetY,
                // background: "radial-gradient(circle at 2% 2%,  "+ backgroundColor +" 40%, "+ backgroundColor1 +" 130%)",
                background:  backgrounds[2],
                borderTopLeftRadius: borderRadius,
                borderTopRightRadius: borderRadius,
                borderBottomLefttRadius: 10,
                borderBottomRighttRadius: 10,

            }}
        >
            <div 
                className="tapper-element-tapper"
                style={{
                    height: width - 10,
                    borderRadius: borderRadius - 4,
                    //backgroundColor: backgrounds[ 0 ]
                }}
                draggable="true" 
                onDrag={this.onDrag}
                onDragStart={ this.onDragStart }
                onDragEnd={ this.onDragEnd } 
            > 
                 <div 
                    className="tapper-element-tapper-inner"
                    style={{
                        background : backgrounds[ 0 ] ,
                        border: "3px solid " +  backgrounds[ 0 ] 
                    }}
                >
                    <div
                         className="tapper-element-tapper-inner-inner"
                         style={{

                         }}
                    >

                    </div>
                </div>  
            </div>
            <div 
                className="tapper-element-label"
            >
              { data }  
            </div>
        </div>
    }
}
export default TapperStaff;