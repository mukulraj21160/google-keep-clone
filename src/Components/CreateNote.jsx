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
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
    },
  },
  card: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
    },
  },

  text_Field: {
    textAlign: "left",
    padding: "10px",
    fontWeight: "bold",
    fontSize: "32px",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      padding: "10px",
      fontWeight: "bold",
      fontSize: "32px",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      padding: "10px",
      fontWeight: "bold",
      fontSize: "32px",
    },
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
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
    <div>
      <Grid container item>
        <Grid item lg={4} md={4} xs={1}></Grid>
        <Grid item lg={4} md={4} xs={10} className={classes.main}>
          <Card className={classes.card}>
            <div>
              <TextField
                className={classes.text_Field}
                name="title"
                value={note.title}
                onChange={handleNoteChange}
                placeholder="Title"
              ></TextField>
              <br />
              <TextField
                className={classes.text_Field}
                name="content"
                value={note.content}
                onChange={handleNoteChange}
                placeholder="Add Notes Here..."
                style={{ paddingBottom: "50px" }}
              ></TextField>
            </div>
            <div className={classes.btn}>
              <IconButton onClick={addEvent} color="inherit">
                <AddIcon color="primary" />
              </IconButton>
            </div>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default CreateNote;
