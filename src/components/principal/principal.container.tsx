import React from "react";
import { withRouter } from "react-router-dom";
import { PrincipalComponent } from "./principal.component";
import { Image } from "../imagelist/image-list.vm";
import { getCatsCollection, getKitiesCollection } from "../imageList/api";
import { mapImageListFromApiToVM } from "../imageList/image-list.mapper";
import { useParams, useHistory } from "react-router-dom";
import { routes } from "../router/router";
import { IconButton } from "@material-ui/core";

export const PrincipalContainer: React.FC = () => {
  const [images, setImages] = React.useState<Image[]>([]);
  const server = useParams();
  const history = useHistory();

  const onLoadImageList = async () => {
    const apiImageList =
      server && server.id == "kities"
        ? await getKitiesCollection()
        : await getCatsCollection();
    const viewModelImageList = mapImageListFromApiToVM(apiImageList);
    setImages(viewModelImageList);
  };

  React.useEffect(() => {
    onLoadImageList();
  }, []);

  const handleChangeImages = (id: string) => {
    history.push(routes.cats(id));
  };

  return (
    <div>
      <IconButton
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleChangeImages("cats")
        }
      >
        Cats
      </IconButton>
      <IconButton
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleChangeImages("kities")
        }
      >
        Kities
      </IconButton>
      <PrincipalComponent ImageCollection={images} />
    </div>
  );
};
