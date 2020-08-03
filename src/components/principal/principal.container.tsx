import React from "react";
import { PrincipalComponent } from "./principal.component";
import { Image } from "../imagelist/image-list.vm";
import { getCatsCollection } from "../imageList/api";
import { mapImageListFromApiToVM } from "../imageList/image-list.mapper";

export const PrincipalContainer: React.FC = () => {
  const [images, setImages] = React.useState<Image[]>([]);

  const onLoadImageList = async () => {
    const apiImageList = await getCatsCollection();
    const viewModelImageList = mapImageListFromApiToVM(apiImageList);
    setImages(viewModelImageList);
  };

  React.useEffect(() => {
    onLoadImageList();
  }, []);

  const handleBuyImage = (image: Image) => {
    console.log(image.description);
  };

  return (
    <div>
      <PrincipalComponent ImageCollection={images} />
    </div>
  );
};
