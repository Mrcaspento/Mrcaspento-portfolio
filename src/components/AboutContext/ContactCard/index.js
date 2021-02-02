import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const ContactCard = () => {
    const classes = useStyles();
    return (<>

        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Contact
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:Mrcaspento@gmail.com">Mrcaspento@gmail.com</a></li>
                        <li><strong>Github:</strong> <a href="https://mrcaspento.github.io/">Mrcaspento.github.io</a>
                        </li>
                        <li><strong>Twiter:</strong> <a href="https://twitter.com/UnusualCaspento">UnusualCaspento</a></li>
                        <li><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/matthew-caspento-6358671b6/">Matthew Caspento</a></li>
                        <li><strong>Resume:</strong> <a href="../assets/pdf/Resume.pdf" download>Resume</a></li>
                    </ul>
                </Typography>
            </CardContent>
        </Card>

    </>
    )
}
export default ContactCard;