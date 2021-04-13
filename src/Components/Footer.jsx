import React from "react";
import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  Footer: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      //
    },
    [theme.breakpoints.up("sm")]: {
      //
    },

    [theme.breakpoints.up("md")]: {
      //
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      bottom: "0",
      width: "100%",
      backgroundColor: "#F7CD2E",
      textAlign: "center",
      padding: "15px 0px 15px 0px",
    },
  },
}));

const Footer = () => {
  const year = new Date().getFullYear();
  const classes = style();
  return (
    <div className={classes.Footer}>
      Copyright © {year} | All Rights Reserved.
    </div>
  );
};

export default Footer;
