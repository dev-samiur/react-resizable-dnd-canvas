import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';

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

const CanvasScaller= () => {

    const classes = useStyles();

    const [width, setWidth]= useState<any>()
    const [height, setHeight]= useState<any>()

    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2" style={{marginBottom: 20}}>
              Adjust Dimentions
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Width</InputLabel>
                <Select
                    native
                    value={width}
                    onChange={ (e) => setWidth(e.target.value)}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl} style={{marginLeft: 50}}>
                <InputLabel htmlFor="age-native-simple">Height</InputLabel>
                <Select
                    native
                    value={height}
                    onChange={ (e) => setHeight(e.target.value)}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
          </CardContent>
          <CardActions style={{marginTop: 20, marginBottom: 20, marginLeft: 10}}>
            <Button variant="contained" color="primary" size="small">Scale Image</Button>
          </CardActions>
        </Card>
      );
}

export default CanvasScaller;
