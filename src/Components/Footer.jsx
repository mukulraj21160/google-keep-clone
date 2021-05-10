import React from "react";
import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  Footer: {
    fontSize: "15px",
    backgroundColor: "#fab30a",
    textAlign: "center",
    marginTop: "20px",
    padding: "10px 0px 10px 0px",
    [theme.breakpoints.up("md")]: {
      padding: "15px 0px 15px 0px",
    },
    [theme.breakpoints.up("lg")]: {
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
