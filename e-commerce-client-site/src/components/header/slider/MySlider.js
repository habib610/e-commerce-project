import { Grid } from "@material-ui/core";
import React from "react";
import CategoriesList from "../Navigation/CategoriesList";

const MySlider = () => {
  return (
    <Grid container>
      <Grid item>
        <CategoriesList />
      </Grid>
    </Grid>
  );
};

export default MySlider;
