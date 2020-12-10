import {
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {
  ArrowDropDown,
  ArrowRight,
  Menu,
  Message,
  NotificationImportant,
  PersonOutline,
  ShoppingBasket,
} from "@material-ui/icons";
import React from "react";
import Searchbar from "./Searchbar";

function TemporaryDrawer({ toggleDrawer, state }) {
  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <>
            <ListItem button key={text}>
              <ListItemIcon>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <button
          style={{
            width: "100%",
            height: "40px",
            display: "flex",
            justiyContent: "start",
            alignItems: "center",
            border: "none",
            backgroundColor: "inherit",
          }}
          onClick={toggleDrawer("left", true)}
        >
          <Menu />
        </button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

const Navbar = () => {
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const smallMatch = useMediaQuery(useTheme().breakpoints.down("xs"));
  return (
    <>
      <Grid container className="container" style={{ padding: "10px 0" }}>
        <Grid item xs={1} style={{ display: smallMatch ? "" : "none" }}>
          <TemporaryDrawer toggleDrawer={toggleDrawer} state={state} />
        </Grid>
        <Grid item sm={2} style={{ display: !smallMatch ? "" : "none" }}>
          <span className="logo-large">Cart-Gear</span>
        </Grid>
        <Searchbar />
        <Grid
          item
          xs={12}
          sm={3}
          style={{
            display: "flex",
            justifyContent: smallMatch ? "space-between" : "center",
            alignItems: "center",
            position: smallMatch ? "absolute" : "",
            bottom: 0,
            left: "0",
            right: "0",
            borderTop: smallMatch ? "1px solid silver" : "",
          }}
        >
          <NavItems smallMatch={smallMatch} />
        </Grid>
      </Grid>

      <Grid
        container
        className="container"
        style={{
          backgroundColor: "#333333",
          display: smallMatch ? "none" : "",
        }}
      >
        <Grid item style={{ backgroundColor: "#c5151b", width: "250px" }}>
          <Button
            fullWidth
            startIcon={<Menu onClick={toggleDrawer("left", true)} />}
            endIcon={<ArrowDropDown />}
            variant="text"
            size="large"
            style={{ color: "white" }}
          >
            Categories
          </Button>
        </Grid>
        <Grid item xs={6} lg={8} alignItems="center">
          {["all shops", "gift card", "campaigns", "express"].map((item) => {
            return (
              <Button
                variant="text"
                size="small"
                style={{ height: "100%", color: "white", marginLeft: "5px" }}
              >
                {item}
              </Button>
            );
          })}
        </Grid>
        <Grid item xs={3} lg={2} alignItems="center">
          {["news feed", "help"].map((item) => {
            return (
              <Button
                variant="text"
                size="small"
                style={{ height: "100%", color: "white" }}
              >
                {item}
              </Button>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
const NavItems = ({ smallMatch }) => {
  const navItems = [
    { text: "cart", icon: <ShoppingBasket /> },
    { text: "message", icon: <Message /> },
    {
      logo: <span className="logo-small">{"Cart-Gear"[0]}</span>,
    },
    { text: "notifications", icon: <NotificationImportant /> },
    { text: "person", icon: <PersonOutline /> },
  ];
  return (
    <>
      {navItems.map((item, i) => {
        return (
          <Button
            key={i}
            style={{ display: i === 2 && !smallMatch ? "none" : "" }}
          >
            <span>
              {item.logo ? item.logo : item.icon} <br />
              {smallMatch && item.text && <small>{item.text}</small>}
            </span>
          </Button>
        );
      })}
    </>
  );
};

export default Navbar;
