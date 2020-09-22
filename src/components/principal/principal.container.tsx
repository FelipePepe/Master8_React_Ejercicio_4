import React from "react";
import PropTypes from "prop-types";
import { PrincipalComponent } from "./principal.component";
import { Image } from "../imageList";
import { getCatsCollection, getKitiesCollection } from "../imageList/api";
import { mapImageListFromApiToVM } from "../imageList/image-list.mapper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export const PrincipalContainer: React.FC = () => {
  const [images, setImages] = React.useState<Image[]>([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  const onLoadImageList = async (server: string) => {
    const apiImageList =
      server == "kities"
        ? await getKitiesCollection()
        : await getCatsCollection();
    const viewModelImageList = mapImageListFromApiToVM(apiImageList);
    setImages(viewModelImageList);
  };

  React.useEffect(() => {
    onLoadImageList("cats");
  }, []);

  React.useEffect(() => {
    if (value === 0) {
      onLoadImageList("cats");
    } else {
      onLoadImageList("kities");
    }
  }, [value]);

  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Cats" />
          <Tab label="Kities" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PrincipalComponent ImageCollection={images} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PrincipalComponent ImageCollection={images} />
      </TabPanel>
    </div>
  );
};
