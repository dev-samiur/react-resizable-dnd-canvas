import React from 'react';
import Layout from '../components/Layout'
import { Container, Grid } from '@material-ui/core';

const Home= () => {
  return (
    <div>
      <Layout />
      <Container style={{paddingTop: 50}}>
          <Grid container justify="center" spacing={5}>
              <Grid item xs={12} md={6} style={{border: '1px solid red'}}>
                    Row 1
              </Grid>
              <Grid item xs={12} md={6} style={{border: '1px solid red'}}>
                    Row 2
              </Grid>
          </Grid>
      </Container>
    </div>
  );
}

export default Home;
