import React from 'react';
import '../../App.css';
import './style.css';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    '& p': {
      color: '#f44336',
      '& span': {
        color: 'white'
      }
    }
  },
  margin: {
    margin: theme.spacing(1),
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}))(Button);

function Hero() {
  const classes = useStyles();

  return (
    <div className='hero-container'>
      <video src='/videos/background.mp4' autoPlay loop muted />
      <h1 className={classes.root}>
        Hello,I'm
        <p>{'Matthew Caspento'}
          <span>
            <div>{'   '}</div>I'm a Full-Stack Developer
        </span>
        </p>
      </h1>
      <div className='hero-btns'>
        <Link to='/projects' className='btn-mobile'>
          <ColorButton
            className={classes.margin}
            varient="contained"
            color="primary"
            size= 'large'
          >
            Check out My Projects
      </ColorButton>
        </Link>
      </div>
    </div>
  );
}
export default Hero;