import React, { useEffect } from "react";
import { css } from "emotion";

import { ImageListContainer } from "../imageList";
import { CarryContainer } from "../carry";
import { Image } from "../imageList/image-list.vm";

import { ImageProvider } from "../image/image.context";

interface Props {
  ImageCollection: Image[];
}

const principalStyle = css`
  display: grid;
  grid-template-columns: auto 320px;
`;

export const PrincipalComponent: React.FC<Props> = (props) => {
  const images = props.ImageCollection;

  return (
    <div className={principalStyle}>
      <ImageProvider>
        <ImageListContainer ImageCollection={images} />
        <CarryContainer />
      </ImageProvider>
    </div>
  );
};
