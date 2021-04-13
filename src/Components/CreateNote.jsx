import React, { useState } from "react";
import {
  makeStyles,
  Card,
  TextField,
  IconButton,
  Grid,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const style = makeStyles((theme) => ({
  main: {
    //
  },

  card: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-evenly",
      // padding: "0px 15px 0px 15px",
      width: "60%",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-evenly",
      // padding: "0px 15px 0px 15px",
      width: "60%",
    },

    [theme.breakpoints.up("md")]: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-evenly",
      // padding: "0px 15px 0px 15px",
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-evenly",
      // padding: "0px 15px 0px 15px",
      width: "60%",
    },
  },
  grid: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
    },

    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
    },
  },

  heading: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      textAlign: "left",
      padding: "10px 10px 10px 10px",
      fontWeight: "bold",
      fontSize: "32px",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      padding: "10px 10px 10px 10px",
      fontWeight: "bold",
      fontSize: "32px",
    },

    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      padding: "10px 10px 10px 10px",
      fontWeight: "bold",
      fontSize: "32px",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      padding: "10px 10px 10px 10px",
      fontWeight: "bold",
      fontSize: "32px",
    },
  },
  btn: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      margin: "85px -15px 0px 0px",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "85px -15px 0px 0px",
    },

    [theme.breakpoints.up("md")]: {
      margin: "85px -15px 0px 0px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "85px -15px 0px 0px",
    },
  },
}));

const CreateNote = ({ passNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleNoteChange = (event) => {
    const { value, name } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const classes = style();
  return (
    <div className={classes.main}>
      <Grid container item>
        <Grid item lg={4} md={2} sm={2} xs={1}></Grid>
        <Grid item lg={4} md={8} sm={8} xs={10} className={classes.grid}>
          <Card className={classes.card}>
            <div>
              <TextField
                className={classes.heading}
                name="title"
                value={note.title}
                onChange={handleNoteChange}
                placeholder="Title"
              ></TextField>
              <br />
              <TextField
                className={classes.heading}
                name="content"
                value={note.content}
                onChange={handleNoteChange}
                placeholder="Add Note Here..."
              ></TextField>
            </div>
            <div>
              <IconButton
                className={classes.btn}
                onClick={addEvent}
                color="inherit"
              >
                <AddIcon color="primary" />
              </IconButton>
            </div>
          </Card>
        </Grid>
        <Grid item lg={4} md={2} sm={2} xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default CreateNote;
