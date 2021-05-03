import React from 'react';
import Layout from '../components/Layout'
import { Container, Grid } from '@material-ui/core';
import ResizableDNDCanvas from '../components/ResizableDNDCanvas'

const Home= () => {

    const handleWidthChange= () => {

    }

    const handleHeightChange= () => {
        
    }

    return (
    <>
        <Layout />
        <Container style={{paddingTop: 50}}>
            <Grid container justify="center" spacing={5}>
                <Grid 
                    item 
                    xs={12} md={7} 
                    style={{overflow: 'hidden', height: 600, border: '1px solid red', position: 'relative'}}
                >
                    <ResizableDNDCanvas 
                        imgSrc="https://digitalsynopsis.com/wp-content/uploads/2017/06/beautiful-color-palettes-combinations-schemes-moonlight-bytes-6.png"
                        // handleHeightChange={handleHeightChange} 
                        // handleWidthChange={handleWidthChange}
                    />
                </Grid>
                <Grid item xs={12} md={5} style={{border: '1px solid red'}}>
                    Row 2
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </Container>
    </>
    );
}

export default Home;
