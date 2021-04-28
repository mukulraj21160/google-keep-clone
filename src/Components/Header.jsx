import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import logo from "../Assets/logo.png";

const style = makeStyles((theme) => ({
  Header: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      background: "#fab30a",
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      background: "#fab30a",
      display: "flex",
    },

    [theme.breakpoints.up("md")]: {
      background: "#fab30a",
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      background: "#fab30a",
      display: "flex",
    },
  },
  heading: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "15px",
      padding: "10px 10px 10px 10px",
      marginTop: "4px",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "25px",
      padding: "10px 10px 10px 10px",
      marginTop: "8px",
    },

    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "25px",
      padding: "10px 10px 10px 10px",
      marginTop: "8px",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "25px",
      padding: "10px 10px 10px 10px",
      marginTop: "8px",
    },
  },
  logo: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      width: "30px",
      height: "24px",
      marginLeft: "12px",
      marginTop: "12px",
      marginBottom: "12px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "60px",
      height: "48px",
      marginLeft: "12px",
      marginTop: "12px",
      marginBottom: "12px",
    },

    [theme.breakpoints.up("md")]: {
      width: "60px",
      height: "48px",
      marginLeft: "12px",
      marginTop: "12px",
      marginBottom: "12px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "60px",
      height: "48px",
      marginLeft: "12px",
      marginTop: "12px",
      marginBottom: "12px",
    },
  },
}));

const Header = () => {
  const classes = style();
  return (
    <div>
      <Grid
        container
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.Header}
      >
        <img className={classes.logo} src={logo} alt="logo" />
        <Typography className={classes.heading}>Google Keep Clone</Typography>
      </Grid>
    </div>
  );
};

export default Header;
