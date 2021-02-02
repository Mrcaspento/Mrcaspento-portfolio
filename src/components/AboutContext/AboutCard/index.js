import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Profile from "../../../assets/images/Profile.jpg"



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  const AboutCard = () => {
    const classes = useStyles();
    return(<>
        
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="About"
          height="240"
          border-radius="50% !important" 
          image= {Profile}
          title="ProfileAbout"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Born in Newark, NJ in 1994.I lived there for 5 years before my
              parents decided to move my twin sister and me to South Carolina looking for a
              better
              life, or avoid paying higher taxes. Grew up in Myrtle Beach, Sc and went to
              Coastal
              Carolina Unversity for Biochemistery until 2018 where I moved to Charlotte, NC
              and
              decided to become a bar manager. Where I also had a pop-up bar in Charlotte at
              the
              Discovery Place
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    
      </CardActions>
    </Card>
   
    </>
    )
  }
  export default AboutCard;