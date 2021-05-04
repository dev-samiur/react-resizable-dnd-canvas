import React, { useState, useEffect, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./r-dnd-cropper.css";

interface RDndCropperProps{
    imgSrc: string
    cropWidth: any
    cropHeight: any
    handleHeightChange(e:any):void
    handleWidthChange(e:any):void
}

export const ResizableDNDCropper: React.FC<RDndCropperProps>= ({imgSrc, cropWidth, cropHeight, handleHeightChange, handleWidthChange}) => {
  const [image, setImage] = useState(imgSrc);
  const [width, setWidth]= useState<any>(cropWidth) 
  const [height, setHeight]= useState<any>(cropHeight) 
  const [cropping, setCropping]= useState<any>(false) 

  const cropperRef = useRef<HTMLImageElement>(null);

  const onCrop = () => {
    setCropping(true)
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    handleHeightChange(Math.floor(cropper.getCropBoxData().height));
    handleWidthChange(Math.floor(cropper.getCropBoxData().width));
    setCropping(false)
  };

    useEffect(() => {
    setImage(imgSrc)
    }, [imgSrc])

    useEffect(() => {
        setHeight(cropHeight)
    }, [cropHeight])

    useEffect(() => {
        setWidth(cropWidth)
    }, [cropWidth])

    useEffect(() => {
        if(!cropping){
            const imageElement: any = cropperRef?.current;
            const cropper: any = imageElement?.cropper;
            if(cropper.cropBoxData){
                cropper.setCropBoxData({width: parseInt(width)})
            }
        }
    }, [width])

    useEffect(() => {
        if(!cropping){
            const imageElement: any = cropperRef?.current;
            const cropper: any = imageElement?.cropper;
            if(cropper.cropBoxData){
                cropper.setCropBoxData({height: parseInt(height)})
            }
        }
    }, [height])

  return (
    <div>
      <div style={{ width: "100%" }}>
        <Cropper
          style={{ height: 456, width: "100%" }}
          zoomTo={0}
          initialAspectRatio={1}
          src={image}
          viewMode={1}
          guides={false}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          crop={onCrop}
          ref={cropperRef}
          dragMode="none"
        />
      </div>
    </div>
  );
};

export default ResizableDNDCropper;