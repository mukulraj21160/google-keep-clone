import React from "react";
import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  Footer: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      fontSize: "15px",
      backgroundColor: "#fab30a",
      textAlign: "center",
      marginTop: "20px",
      padding: "10px 0px 10px 0px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "15px",
      backgroundColor: "#fab30a",
      textAlign: "center",
      marginTop: "20px",
      padding: "10px 0px 10px 0px",
    },

    [theme.breakpoints.up("md")]: {
      backgroundColor: "#fab30a",
      textAlign: "center",
      marginTop: "20px",
      padding: "15px 0px 15px 0px",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#fab30a",
      textAlign: "center",
      marginTop: "20px",
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
