// import AppRouter from "./router/Router";
// import {Provider} from "react-redux";
// import store from "./context/store";
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import React from 'react';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles'

function App() {
  const classes= useStyles();
  return (
    // <Provider store = {store}>
    //   <AppRouter />
    // </Provider>

   
      <Container>
      <AppBar position="static" color='inherit' className={classes.appBar} >
        
          <Typography  className={classes.heading} variant="h2" align='center' >
            Memories
          </Typography>
          <img  src={memories} alt="icon" height="60" className={classes.image}/>
     
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  />
              {/* setCurrentId={setCurrentId} */}
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form  />
              {/* currentId={currentId} setCurrentId={setCurrentId} */}
            </Grid>
          </Grid>
        </Container>
      </Grow>
      </Container>
   
  );
}



export default App;