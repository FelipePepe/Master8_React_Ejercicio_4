import React, { useEffect } from "react";
import { css } from "emotion";

import { ImageListContainer } from "../imageList";
import { CarryContainer } from "../carry";
import { Image } from "../imageList/image-list.vm";

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
      <ImageListContainer ImageCollection={images} />
      <CarryContainer />
    </div>
  );
};
