import React from "react";
import { Typography } from "@material-ui/core";

const Notice = () => {
  return (
    <Typography
      component="p"
      align="center"
      style={{
        color: "white",
        padding: "5px 0",
        backgroundColor: "rgb(194, 42, 42)",
      }}
    >
      No notice today
    </Typography>
  );
};

export default Notice;
