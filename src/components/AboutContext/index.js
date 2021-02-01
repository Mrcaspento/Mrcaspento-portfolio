import React from 'react';
import AboutCard from './AboutCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
    grid: {
      margin: '-15px -15px',
      width: 'auto',
    }
  }));


const AboutContext= () => {
    const classes = useStyles();
  
        return (
        <>
        <Grid>
          <AboutCard />

        </Grid>
        </>
        
          );
        }
export default AboutContext;