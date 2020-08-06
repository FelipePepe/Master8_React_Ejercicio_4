import React from "react";

import { Image } from "../imageList/image-list.vm";
import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";

import { ShoppingCartTwoTone, DeleteTwoTone } from "@material-ui/icons";

interface Props {
  ImageCollection: Image[];
  Total: Number;
  OnDeleteImage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idImage: number
  ) => void;
}

const useStyles = makeStyles({
  table: {
    minWidth: 120,
  },
});

export const CarryComponent: React.FC<Props> = (props) => {
  const imageCollection = props.ImageCollection;
  const total = props.Total;
  const deleteImage = props.OnDeleteImage;

  const classes = useStyles();

  return (
    <>
      <h3>
        <ShoppingCartTwoTone />
        &nbsp;&nbsp;Shopping Cart
      </h3>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={3}>Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {imageCollection.map((row) => (
              <TableRow key={row.id}>
                <TableCell colSpan={3}>{row.description}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    onClick={(e) => {
                      deleteImage(e, row.id);
                    }}
                  >
                    <DeleteTwoTone fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={2}></TableCell>
              <TableCell>Total</TableCell>
              <TableCell align="right">{total.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
