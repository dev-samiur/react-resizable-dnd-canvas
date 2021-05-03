import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

interface CanvasScallerProps{
    imgWidth: any
    imgHeight: any
    handleHeightChange(e:any):void
    handleWidthChange(e:any):void
}

const CanvasScaller: React.FC<CanvasScallerProps>= ({imgHeight, imgWidth, handleHeightChange, handleWidthChange}) => {

    const classes = useStyles();

    const [width, setWidth]= useState<any>('400px')
    const [height, setHeight]= useState<any>('400px')

    const handleScaleImage= () => {
        handleHeightChange(height)
        handleWidthChange(width)
    }

    useEffect(() => {
        setHeight(imgHeight)
    }, [imgHeight])

    useEffect(() => {
        setWidth(imgWidth)
    }, [imgWidth])

    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2" style={{marginBottom: 20}}>
              Adjust Dimentions
            </Typography>
            <Grid container>
                <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                    {/* <InputLabel htmlFor="age-native-simple">Width</InputLabel>
                    <Select
                        native
                        value={width}
                        onChange={ (e) => setWidth(e.target.value)}
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    >
                        <option value={100}>100</option>
                        <option value={200}>200</option>
                        <option value={300}>300</option>
                        <option value={400}>400</option>
                        <option value={500}>500</option>
                        <option value={600}>600</option>
                        <option value={700}>700</option>
                        <option value={800}>800</option>
                        <option value={900}>900</option>
                        <option value={1000}>1000</option>

                    </Select> */}

                    <TextField id="outlined-basic" label="Width" value={width} onChange={ (e) => setWidth(e.target.value)} />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                <FormControl className={classes.formControl}>
                {/* <InputLabel htmlFor="age-native-simple">Height</InputLabel>
                <Select
                    native
                    value={height}
                    onChange={ (e) => setHeight(e.target.value)}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                    <option value={300}>300</option>
                    <option value={400}>400</option>
                    <option value={500}>500</option>
                    <option value={600}>600</option>
                    <option value={700}>700</option>
                    <option value={800}>800</option>
                    <option value={900}>900</option>
                    <option value={1000}>1000</option>
                </Select> */}
                <TextField id="outlined-basic" label="Height" value={height} onChange={ (e) => setHeight(e.target.value)} />
            </FormControl>
                </Grid>
            </Grid>
          </CardContent>
          <CardActions style={{marginTop: 20, marginBottom: 20, marginLeft: 10}}>
            <Button variant="contained" color="primary" size="small" onClick={handleScaleImage}>Scale Image</Button>
          </CardActions>
        </Card>
      );
}

export default CanvasScaller;
