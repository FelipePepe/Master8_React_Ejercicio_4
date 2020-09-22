import React from "react";
import { Image } from "../imageList/image-list.vm";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Checkbox from "@material-ui/core/Checkbox";

import Typography from "@material-ui/core/Typography";

interface Props {
  DataImage: Image;
  OnBuy: (image: Image) => void;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 125,
  },
});

export const ImageComponent: React.FC<Props> = (props) => {
  const image: Image = props.DataImage;
  const onBuy: (image: Image) => void = props.OnBuy;

  const [currentImage, setCurrentImage] = React.useState(image);

  const classes = useStyles();

  const handleBuyChangeValue = (e, checked: boolean) => {
    setCurrentImage({
      ...image,
      buy: checked,
    });

    onBuy({
      ...currentImage,
      buy: checked,
    });
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={currentImage.image}
            title={currentImage.description}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {currentImage.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span"> 
              {currentImage.price.toFixed(2)} €
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Checkbox
            checked={currentImage.buy}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>,
              checked: boolean
            ) => handleBuyChangeValue(e, checked)}
          />
          Buy
        </CardActions>
      </Card>
    </div>
  );
};
