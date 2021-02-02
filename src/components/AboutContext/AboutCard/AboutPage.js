import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';




const AboutContext = () => {

    return (
        <>
    
        <Grid container spacing={4} justify="center">
            <Grid item xs={3} sm={6}>
                
                <Paper style={{ height: 75, width: '100%'}} />
            </Grid>
            <Grid item xs={3} sm={6}>
                <Paper  style={{ height: 75, width: '100%'}} />
            </Grid>
            <Grid item xs={3} sm={6}>
                <Paper  style={{ height: 75, width: '100%'}} />
            </Grid>
        </Grid>
</>
    )
}
export default AboutContext;