import { Box, Button } from "@material-ui/core";
import { Call, Mail, PhoneAndroid } from "@material-ui/icons";
import React from "react";

const ContactBar = () => {
  return (
    <Box
      component="div"
      className="container"
      py={"5px"}
      bgcolor="#e0e0e0"
      position="relative"
    >
      <Box component="div">
        <Button startIcon={<Call />} href="tel:000000000">
          000000
        </Button>
        <Button startIcon={<Mail />} href="mailto:test@gmail.com">
          mail us
        </Button>
      </Box>
      <Box
        component="div"
        className="container"
        position="absolute"
        right="0"
        top="5px"
      >
        <Button startIcon={<PhoneAndroid />} href="#">
          save big on our app
        </Button>
      </Box>
    </Box>
  );
};

export default ContactBar;
