import React, { useState } from 'react';
import { Rnd } from "react-rnd";
import { Box } from '@material-ui/core';

interface ResizableDNDCanvasProps{
    imgSrc: string
    // handleHeightChange(e:number):void
    // handleWidthChange(e:number):void
}

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    overflow: 'hidden'
};

const ResizableDNDCanvas: React.FC<ResizableDNDCanvasProps>= ({imgSrc}) => {
  
 const [x, setX]= useState<number>(10) 
 const [y, setY]= useState<number>(10) 
 const [width, setWidth]= useState<string>('400') 
 const [height, setHeight]= useState<string>('400') 

 return (
    <Rnd
        style={style}
        size={{ width: width, height: height }}
        position={{ x: x, y: y }}
        onDragStop={(e, d) => {
          setX(d.x)
          setY(d.y)
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
            setWidth(ref.style.width)
            setHeight(ref.style.height)
            setX(position.x)
            setY(position.y)
          }
        }
      >
        <img src={imgSrc} style={{ width: width, height: height, objectFit: 'cover' }} />
      </Rnd>
  );
}

export default ResizableDNDCanvas;
