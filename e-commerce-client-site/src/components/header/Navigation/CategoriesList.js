import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import React from "react";

const CategoriesList = () => {
  return (
    <List
      style={{ width: "250px", backgroundColor: "whiteSmoke", padding: "0" }}
    >
      {[
        "desktop",
        "speaker",
        "freezer",
        "refrigerator",
        "split AC",
        "laptop",
        "smartphone",
        "microwave oven",
      ].map((text, index) => (
        <>
          <ListItem
            button
            key={text}
            style={{ borderBottom: "1px solid #ddd" }}
          >
            <ListItemText primary={text} />
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
          </ListItem>
        </>
      ))}
    </List>
  );
};
export default CategoriesList;
