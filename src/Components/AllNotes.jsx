import React from "react";
import { Card, IconButton, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const style = makeStyles((theme) => ({
  main: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.up("md")]: {
      marginTop: "30px",
      display: "flex",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "30px",
      display: "flex",
      justifyContent: "space-evenly",
    },
  },
}));

const AllNotes = (props) => {
  const classes = style();

  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <div className={classes.main}>
      <Card
        style={{
          width: "90%",
          backgroundColor: "#ffffff",
          color: "black",
        }}
      >
        <h2
          style={{ padding: "0px 10px 0px 10px", overflowWrap: "break-word" }}
        >
          {props.title}
        </h2>
        <p style={{ padding: "0px 10px 0px 10px", overflowWrap: "break-word" }}>
          {" "}
          {props.content}{" "}
        </p>
        <IconButton onClick={deleteNote} style={{ color: "red" }}>
          <DeleteIcon />
        </IconButton>
      </Card>
    </div>
  );
};

export default AllNotes;
