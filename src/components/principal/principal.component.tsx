import React, { useEffect } from "react";
import { css } from "emotion";

import { ImageListContainer } from "../imageList";
import { Image } from "../imageList/image-list.vm";

interface Props {
  ImageCollection: Image[];
}

export const PrincipalComponent: React.FC<Props> = (props) => {
  const images = props.ImageCollection;

  return <ImageListContainer ImageCollection={images} />;
};
