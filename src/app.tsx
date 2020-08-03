import React from "react";
import { PrincipalContainer } from "./components";

import { Image } from "./components/imageList/api/image-list.api.model";

interface Props {
  ImageCollection: Image[];
}

export const App: React.FC = () => {
  return <PrincipalContainer />;
};
