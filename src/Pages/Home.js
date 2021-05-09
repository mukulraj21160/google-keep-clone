import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Header from "../Components/Header";
import CreateNote from "../Components/CreateNote";
import AllNotes from "../Components/AllNotes";
import Footer from "../Components/Footer";

const style = makeStyles((theme) => ({
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flexGrow: "1",
  },
}));

const Home = () => {
  const [item, setItem] = useState([]);

  const addNote = (note) => {
    setItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setItem((prevData) =>
      prevData.filter((currentData, index) => {
        return index !== id;
      })
    );
  };
  const classes = style();
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.content}>
        <CreateNote passNote={addNote} />
        <div>
          <Grid container item className={classes.main_grid}>
            {item.map((val, index) => {
              return (
                <Grid item lg={3} md={3} xs={6}>
                  <AllNotes
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
