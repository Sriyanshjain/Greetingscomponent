import Paper from '@material-ui/core/Paper';
import React, { useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Grid, Link, Typography } from "@material-ui/core";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
function Share(props){
return(
    <Grid container direction="column" style={{justifyContent:'center',backgroundColor:'whitesmoke',height:'100%'}}>
     
    <Paper  style={{margin:'10%',padding:'2% '}}>
    <Button variant="outlined" size="small" startIcon={<NavigateBeforeIcon/>} onClick={()=>props.onClick()}>Back to Edit mode</Button>
    <Typography style={{padding:'2%'}}>Share via:</Typography>
    <Grid container spacing={2} style={{padding:'2%'}}>
        <Grid item xs={2}>
        <IconButton aria-label="facebook" >
  <FacebookIcon  style={{color:'#3b5998',fontSize:"3rem"}}/>
        </IconButton>
            </Grid>
            <Grid item xs={2}>
            <IconButton aria-label="facebook" >
  <LinkedInIcon  style={{color:'#2365b1',fontSize:"3rem"}}/>
        </IconButton>
            </Grid>
            <Grid item xs={2}>
            <IconButton aria-label="facebook" >
  <TwitterIcon  style={{color:'#1ca0f2',fontSize:"3rem"}}/>
        </IconButton>
            </Grid>
            <Grid item xs={2}>
            <IconButton aria-label="facebook" >
  <WhatsAppIcon  style={{color:'#12bd41',fontSize:"3rem"}}/>
        </IconButton>
            </Grid>
            <Grid item xs={2}>
            <IconButton aria-label="facebook" >
  <InstagramIcon  style={{color:'#e23e49',fontSize:"3rem"}}/>
        </IconButton>
            </Grid>
            <Grid item xs={2}>
            <IconButton aria-label="facebook" >
  <EmailIcon  style={{color:'#0070c4',fontSize:"3rem"}}/>
        </IconButton>
            </Grid>
    </Grid>
  </Paper>
 </Grid>
     
)

}

export default Share;