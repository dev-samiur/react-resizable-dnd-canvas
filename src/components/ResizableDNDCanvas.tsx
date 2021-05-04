import React, { useState, useEffect } from 'react';
import { Rnd } from "react-rnd";

interface ResizableDNDCanvasProps{
    imgSrc?: string
    imgWidth: any
    imgHeight: any
    handleHeightChange(e:any):void
    handleWidthChange(e:any):void
}

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "transparent",
    overflow: 'hidden',
    cursor: 'pointer'
};

const ResizableDNDCanvas: React.FC<ResizableDNDCanvasProps>= ({imgSrc, imgHeight, imgWidth, handleHeightChange, handleWidthChange}) => {
  
    const [x, setX]= useState<number>(10) 
    const [y, setY]= useState<number>(10) 
    const [width, setWidth]= useState<string>(imgWidth) 
    const [height, setHeight]= useState<string>(imgHeight) 

    useEffect(() => {
        setHeight(imgHeight)
    }, [imgHeight])

    useEffect(() => {
        setWidth(imgWidth)
    }, [imgWidth])

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
            handleHeightChange(ref.style.height)
            handleWidthChange(ref.style.width)
            setX(position.x)
            setY(position.y)
          }
        }
      >
      </Rnd>
  );
}

export default ResizableDNDCanvas;
