import React from "react";
import { ImageListComponent } from "./image-list.component";
import { Image } from "./image-list.vm";
import { ImageContextSession, ImageContext } from "../image/image.context";

interface Props {
  ImageCollection: Image[];
}


export const ImageListContainer: React.FC<Props> = (props) => {
  const images = props.ImageCollection;
  const context = React.useContext<ImageContextSession>(ImageContext);

  
  const [imageList, setImageList] = React.useState<Image[]>([]);

  React.useEffect(() => {
    setImageList(
      images.splice(
        images.findIndex((value) => value.id === context.id),
        1,
        {...context, buy:false}
      )
    );
  }, [context]);

  return <ImageListComponent ImageCollection={imageList} />;
};
