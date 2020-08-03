import React from "react";
import { Image } from "../imageList/image-list.vm";
import { css } from "emotion";
import { CarryComponent } from "./carry.component";

import { ImageContext, ImageContextSession } from "../image";

const mybackground = css`
  background-color: lightpink;
  padding: 10px;
  height: 85vh;
`;

export const CarryContainer: React.FC = () => {
  const [images, setImages] = React.useState<Image[]>([]);
  const [total, setTotal] = React.useState<number>(0);

  const context = React.useContext<ImageContextSession>(ImageContext);

  const DeleteImage = (images: Image[], id: number): Image[] => {
    const imagesResult: Image[] = images.filter((value, index, arr) => {
      return value.id != id;
    });

    return imagesResult;
  };

  const convertImageContextToImage = (
    imageContext: ImageContextSession
  ): Image => {
    if (imageContext) {
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

    if (imageToBuy.buy) {
      setImages([...images, imageToBuy]);
    } else {
      setImages(DeleteImage([...images], imageToBuy.id));
    }
  }, [context]);

  React.useEffect(() => {
    images.map((image) => {
      if (image.id === context.id && context.buy) {
        setTotal(total + image.price);
      } else if (image.id === context.id && !context.buy) {
        setTotal(total - image.price);
      }
    });
  }, [context, images]);

  return (
    <>
      <div className={mybackground}>
        <CarryComponent ImageCollection={images} Total={total} />
      </div>
    </>
  );
};
