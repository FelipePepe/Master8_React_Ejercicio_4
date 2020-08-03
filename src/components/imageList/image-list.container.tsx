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
      <ImageListComponent ImageCollection={images} />
    </div>
  );
};
