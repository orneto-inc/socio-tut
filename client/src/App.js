import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";
// for dispatching action
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts';

function App() {
  // creating dispatch hooks
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  // using dispatch action in useEffect
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId ,dispatch]);
  return (
    <div className="app">
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h3" align="center">
            Memories
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
