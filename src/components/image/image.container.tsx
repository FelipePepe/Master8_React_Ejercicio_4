import React from "react";
import { ImageComponent } from "./image.components";
import { Image } from "../imageList/image-list.vm";
import { ImageContext } from "./image.context";

interface Props {
  DataImage: Image;
}

export const ImageContainer: React.FC<Props> = (props) => {
  const image = props.DataImage;

  const { setImage } = React.useContext(ImageContext);

  const handleImageBuy = (image: Image) => {
    setImage(image);
  };

  return <ImageComponent DataImage={image} OnBuy={handleImageBuy} />;
};
