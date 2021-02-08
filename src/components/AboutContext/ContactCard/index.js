import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Pdf from "../../../assets/pdf/Matthew_Caspento(Resume).pdf"



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

                        <Typography variant="body2" color="textSecondary" component="p">
                            <li>
                                <strong>Email:</strong> <a href="mailto:Mrcaspento@gmail.com">Mrcaspento@gmail.com</a>
                            </li>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <li>
                                <strong>Github:</strong> <a href="https://mrcaspento.github.io/">Mrcaspento.github.io</a>
                            </li>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <li>
                                <strong>Twiter:</strong> <a href="https://twitter.com/UnusualCaspento">UnusualCaspento</a>
                            </li>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <li>
                                <strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/matthew-caspento-6358671b6/">Matthew Caspento</a>
                            </li>
                        </Typography>
                        <Typography xs={2} variant="body2" color="textSecondary" component="p">
                            <li>
                                <strong>Resume:</strong> <a href = {Pdf} target="_blank" rel="noreferrer" download>Resume</a>
                            </li>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">                       
                         <li>
                            <strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/matthew-caspento-6358671b6/">Matthew Caspento</a>
                        </li></Typography>
                    </ul>
                </Typography>
            </CardContent>
        </Card>

    </>
    )
}
export default ContactCard;