import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './style.css'




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        component: "video",
        background: '#e7e7de'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
        background: '#008891'
    },
    image: {
        width: 300,
        height: 128,

    },
    img: {
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',

    },
    media: {
        height: 140,

    },

}));




export function ProjectList({ children }) { // this is where i will adjust the page layout with a card and a list of projects
    return (
        <>
        <ul className="list-group backcard">{children}</ul>
        </>
    )
}
export function ProjectListItem({
    title,
    gif,
    body,
    githubRepo,
    deployed,
    date,
}) {

    const classes = useStyles();
    return (
        <li className="list-group-item m-2">
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt={title}
                                                height="350"
                                                image= {gif}
                                                title={title}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {body}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" variant="contained" color="primary" href={githubRepo} target="_blank">
                                                GitHub Repo
                                            </Button>
                                            <Button size="small" color="primary" variant="contained" target="_blank" href={deployed}>
                                                Deployed Website
                                                </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        {date}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </li>
    )
}