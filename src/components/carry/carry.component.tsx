import React from "react";

import { Image } from "../imageList/image-list.vm";

interface Props {
  ImageCollection: Image[];
}

export const CarryComponent: React.FC<Props> = (props) => {
  const imageCollection = props.ImageCollection;

  return (
    <div>
      <h1>Hello from Carry Component</h1>
      <ul>
        {imageCollection.map((image) => (
          <li key={image.id}>{image.description}</li>
        ))}
      </ul>
    </div>
  );
};
