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
  const [total, setTotal] = React.useState<number>(0);

  const context = React.useContext<ImageContextSession>(ImageContext);

  const convertImageContextToImage = (
    imageContext: ImageContextSession
  ): Image => {
    if (imageContext.buy) {
      const myImage: Image = {
        buy: imageContext.buy,
        description: imageContext.description,
        id: imageContext.id,
        image: imageContext.image,
        price: imageContext.price,
      };

      return myImage;
    }

    return null;
  };

  React.useEffect(() => {
    const imageToBuy: Image = convertImageContextToImage(context);

    if (imageToBuy) {
      setImages([...images, imageToBuy]);
    }
  }, [context]);

  React.useEffect(() => {
    images.map((image) => {
      if (image.buy) {
        setTotal(total + image.price);
      }
    });
  }, [images]);

  return (
    <>
      <div className={mybackground}>
        <CarryComponent ImageCollection={images} Total={total} />
      </div>
    </>
  );
};
