import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Profile from "../../../assets/images/Linked.jpg"



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
          height="360"
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
              cheaper place to live.So I wound up  living in Myrtle Beach, Sc where I graduated HighSchool
              and went to Coastal Carolina Unversity for Biochemistery until 2018 where I moved to Charlotte, NC
              and became a bar manager working at "Halycon Flavours of the Earth". A resturaunt that is apart of the "Mother Earth Group" along side "Something Classic". Where  occasionally would work with and as luck would have it, I was given an opportunity to create a pop-up bar in Charlotte at the Discovery Place "Science on the Rocks" it was featured in the news Wbtv.com and in the Charlotte Agenda. So I had my few minutes of fame before the pandemic hit. I took this opportunity to follow up learning how to code, to develop the ideas flowing in my head. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
    </>
    )
  }
  export default AboutCard;