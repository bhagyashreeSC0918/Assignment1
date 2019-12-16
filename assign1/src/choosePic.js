import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import tileData from './tileData';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 110,
    width: 165,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


export default function TitlebarGridList() {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {tileData.map(value => (
            <Grid key={value.img} item>
              <img src={value.img} alt={value.title}  className={classes.paper}/>
            </Grid>
          ))}
        </Grid>
      </Grid>

    </Grid>
  );
}
