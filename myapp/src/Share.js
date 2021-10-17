import Paper from '@material-ui/core/Paper';
import React, { useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import WhatsApp  from './assets/1-09.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, SvgIcon, Typography } from "@material-ui/core";
import linkedin from './assets/1-11.png';
import gmail from './assets/1-13.png';
import Fade from '@material-ui/core/Fade';
import sms from './assets/1-14.png';
import IconButton from '@material-ui/core/IconButton';
import outlook from './assets/outlook.svg';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles({
    giveMargin:{
      margin:'2%  2% auto',
      
    },
    TypographyStyle:{
      fontFamily: 'Open Sans, sans-serif',
      fontSize:'1.3rem'
    },
    BlueMind:{
      fontFamily:'Open Sans, sans-serif',
    fontWeight:'bolder',
      color:'#1b1464'
    },
    ButtonStyle:{
        color:'white',
        fontFamily: 'Open Sans, sans-serif',
        backgroundColor:'#1b1464 !important',
        textTransform:'none',
        width:'100%',
        padding:'2.5%',
    }
    });
function Share(props){

    const classes=useStyles();
return(
    <Grid container direction="column" style={{height:'110vh'}}>
     <Fade in={true}>
    <Paper elevation={0} style={{padding:'10% '}}>
        <Grid item>
    <Typography className={classes.TypographyStyle}>Now create your custom wishes on</Typography>
      <Typography className={classes.TypographyStyle}><span className={classes.BlueMind}>BlueMind</span> for your clients</Typography>

    <Typography variant='subtitle1' style={{marginTop:'10rem',fontWeight:'bold',fontFamily:'Open Sans, sans-serif',color:'#1b1464'}}>Select the medium to share your wish:</Typography>
    </Grid>
    <Grid item>
    <Grid container spacing={4} style={{padding:'1%'}}>
    <Grid item xs={2}>
    <img src={WhatsApp} style={{pointerEvents:'visible',cursor:'pointer', height:'3.5rem'}}/>
            </Grid>
            <Grid item xs={2}>
            <img src={linkedin} style={{pointerEvents:'visible',cursor:'pointer', height:'3.3rem'}}/>
            </Grid>
            <Grid item xs={2}>
         
                
         <img src={outlook} style={{pointerEvents:'visible',cursor:'pointer', height:'3.5rem'}}/>
         
     
               </Grid>
            <Grid item xs={2}>
            <img src={gmail} style={{pointerEvents:'visible',cursor:'pointer', height:'3.5rem'}}/>
            </Grid>
       
           
            
            
            <Grid item xs={2}>
            <img src={sms} style={{pointerEvents:'visible',cursor:'pointer', height:'3.5rem'}}/>
            </Grid>
           
    </Grid>
    </Grid>
    <Grid item style={{marginTop:'6rem'}}> 
    <Button
        variant="contained"
        component="span"
        className={classes.ButtonStyle}
        
      >
        Send
      </Button>
      
     
    <Button
        variant="contained"
        component="span"
        className={classes.ButtonStyle}
        style={{marginTop:'.5rem'}}
        onClick={()=>props.onClick()}
      >
        Back
      </Button>
      </Grid>
  </Paper>
  </Fade>
 </Grid>
     
)

}

export default Share;