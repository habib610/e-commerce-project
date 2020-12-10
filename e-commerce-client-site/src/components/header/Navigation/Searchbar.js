import { Grid, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";

const Searchbar = () => {
  return (
    <Grid
      item
      container
      xs={11}
      sm={7}
      alignItems="center"
      style={{
        backgroundColor: "#c9151b",
        padding: "3px 5px",
        borderRadius: "5px",
      }}
    >
      <Grid item xs={11}>
        <TextField
          variant="outlined"
          placeholder="search for..."
          color="#ddd"
          fullWidth={true}
          size="small"
          style={{ backgroundColor: "white" }}
        />
      </Grid>
      <Grid item xs={1}>
        <button
          variant="text"
          fullWidth
          style={{
            height: "100%",
            color: "white",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Search />
        </button>
      </Grid>
    </Grid>
  );
};

export default Searchbar;
