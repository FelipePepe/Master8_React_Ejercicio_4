import React from "react";
import { Image, createEmptyImageSession } from "../imageList/image-list.vm";

export interface ImageContextSession extends Image {
  setImage: (image: Image) => void;
}

export const ImageContext = React.createContext<ImageContextSession>({
  id: null,
  buy: null,
  description: "",
  image: "",
  price: null,
  setImage: null,
});

export const ImageProvider: React.FC = ({ children }) => {
  const [image, setImage] = React.useState<Image>(createEmptyImageSession);

  return (
    <ImageContext.Provider
      value={{
        id: image.id,
        buy: image.buy,
        description: image.description,
        image: image.image,
        price: image.price,
        setImage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
