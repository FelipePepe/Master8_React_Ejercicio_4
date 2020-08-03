import React from "react";

import { Image } from "../imageList/image-list.vm";

interface Props {
  ImageCollection: Image[];
  Total: Number;
}

export const CarryComponent: React.FC<Props> = (props) => {
  const imageCollection = props.ImageCollection;
  const total = props.Total;

  return (
    <div>
      <h1>Hello from Carry Component</h1>
      <ul>
        {imageCollection.map((image) => (
          <li key={image.id}>{image.description}</li>
        ))}
      </ul>
      <h2>{`Total: ${total.toFixed(2)}`}</h2>
    </div>
  );
};
