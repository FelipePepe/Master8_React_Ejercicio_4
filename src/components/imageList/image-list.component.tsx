import React from "react";
import { Image } from "./image-list.vm";

import { ImageContainer } from "../image/image.container";

import { css } from "emotion";

interface Props {
  ImageCollection: Image[];
}

const styleImageContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 6fr);
  grid-template-rows: repeat(2, 3fr);
  gap: 10px;
`;

export const ImageListComponent: React.FC<Props> = (props) => {
  const imageCollection = props.ImageCollection;

  return (
    <p className={styleImageContainer}>
      {imageCollection.map((image) => (
        <ImageContainer DataImage={image} key={image.id} />
      ))}
    </p>
  );
};
