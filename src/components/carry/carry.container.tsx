import React from "react";
import { Image } from "../imageList/image-list.vm";
import { css } from "emotion";
import { CarryComponent } from "./carry.component";

import { ImageContext, ImageContextSession } from "../image";

const mybackground = css`
  background-color: lightpink;
`;

export const CarryContainer: React.FC = () => {
  const [images, setImages] = React.useState<Image[]>([]);

  const context = React.useContext<ImageContextSession>(ImageContext);

  const convertImageContextToImage = (
    imageContext: ImageContextSession
  ): Image => {
    const myImage: Image = {
      buy: imageContext.buy,
      description: imageContext.description,
      id: imageContext.id,
      image: imageContext.image,
      price: imageContext.price,
    };

    return myImage;
  };

  React.useEffect(() => {
    setImages([...images, convertImageContextToImage(context)]);
  }, [context]);

  return (
    <>
      <div className={mybackground}>
        <CarryComponent
          ImageCollection={images}
        />
      </div>
    </>
  );
};
