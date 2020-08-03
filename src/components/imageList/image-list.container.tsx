import React from "react";
import { ImageListComponent } from "./image-list.component";
import { Image } from "./image-list.vm";

interface Props {
  ImageCollection: Image[];
}

export const ImageListContainer: React.FC<Props> = (props) => {
  const images = props.ImageCollection;
  return (
    <div>
      <h1>Hello form Image List Container</h1>
      <ImageListComponent ImageCollection={images} />
    </div>
  );
};
