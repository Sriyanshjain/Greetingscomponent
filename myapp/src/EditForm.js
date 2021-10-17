import Paper from '@material-ui/core/Paper';
import React, { useState,useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Logo from './logo.svg'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import PublishIcon from '@material-ui/icons/Publish';
import Fab from '@material-ui/core/Fab';
import MenuItem from '@material-ui/core/MenuItem';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';
import BirthdayO1 from './assets/1-01.png';
import BirthdayO2 from './assets/1-02.png';
import AnnO1 from './assets/1-07.png';
import AnnO2 from './assets/1-08.png';
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
    fontWeight:'bold',
    color:'#1b1464'
  }
  });


function EditForm(props) {
  const defaultValues = {
    name: "BlueMind",
    
  };
  const classes = useStyles();
  const [formValues, setFormValues] = useState(defaultValues);
  const [eventSelected, setSelectedEvent] = useState('Birthday');
  const [eventTemplate, setTemplate] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const events=[
    {
      value:'Birthday',
      label:'Birthday'
    },
    {
      value:'Anniversary',
      label:'Anniversary'
    }
  ]
  const BirthdayOptions=[
    {
      image:BirthdayO1,
      templatename:"Purple Panda"
      
    },
    {
      image:BirthdayO2,
      templatename:"Yellow Candy"
    }
  ]
  const  AnniversaryOptions=[
    {
      image:AnnO1,
      templatename:"Pink Panther"
    },
    {
      image:AnnO2,
      templatename:"Golden Circle"
    }
  ]
 
  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
  }; 
  const handleEventTemplateChange = (event) => {
    console.log(event);
    setTemplate(event.target.value);
  }; 
const handleLogoChange=(e)=>{
  setSelectedImage(e.target.files[0]);
  console.log(e.target.files[0]);
 console.log( URL.createObjectURL(e.target.files[0]));
  props.onChange(formValues.name,e.target.files[0])
}
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    props.onChange(e.target.value,selectedImage);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    props.onChange(formValues.name,selectedImage);
  };
  
const imageClicked=(e)=>{
  console.log(e.target);
  props.changeBackgroundImage(e.target.attributes.value);
  
}
  return ( <Grid container direction="column" style={{height:'120vh'}}>
    <Fade in={true}>
    <Paper  elevation={0} style={{padding:'10%'}}>
      <Typography className={classes.TypographyStyle}>Now create your custom wishes on</Typography>
      <Typography className={classes.TypographyStyle}><span className={classes.BlueMind}>BlueMind</span> for your clients</Typography>
    <form onSubmit={handleSubmit}>
      <Grid item  style={{marginTop:'1.5rem'}}>
        
      <TextField
        id="name-input"
        name="name"
        label="Advisor name"
        type="text"
        variant="outlined"
        size="medium"
      
       style={{width:'100%'}}
        value={formValues.name}
        onChange={handleInputChange}
       />
        </Grid>
        <Grid item  style={{marginTop:'1.5rem'}}>
        
        <TextField
          id="outlined-select-event"
          select={true}
          name="myevent"
          label="Client event"
          size="medium"
          value={eventSelected}
          onChange={handleEventChange}
          style={{width:'100%'}}
          variant="outlined"
        >
           {events.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </Grid>
          <Grid item style={{marginTop:'1.5rem'}}>
            <Typography variant="caption" >Select template</Typography>
            <Grid container direction="row" spacing={2}>
              
              {((eventSelected=="Birthday"))?  BirthdayOptions.map((option) => (
                <Grid item style={{marginTop:'.5rem'}}>
            <Box  component="span" style={{cursor:'pointer'}} >

            <img src={option.image} value={option.templatename} onClick={(e)=>imageClicked(e)} style={{border:'1px solid lightgrey'}} width="60rem" height="60rem" />
            
            </Box>
            </Grid>
          )):
          AnniversaryOptions.map((option) => (
            <Grid item style={{marginTop:'.5rem'}}>
        <Box  component="span" style={{cursor:'pointer'}}  >

        <img src={option.image} value={option.templatename} onClick={(e)=>imageClicked(e)} style={{border:'1px solid lightgrey'}} width="60rem" height="60rem" />
        
        </Box>
        </Grid>
      ))

              }
              </Grid>
          </Grid>
    
        <Grid item  style={{marginTop:'0.8rem'}}>
      
        <input accept="image/*" type="file" id="select-image" style={{ display: 'none',pointerEvents:'none' }} onChange={e => handleLogoChange(e)}/>
       <Typography variant="caption" >Upload your logo</Typography>
        <label htmlFor="select-image" style={{pointerEvents:'none'}} >

 

        <Button
        variant="outline"
        component="span"
        style={{border:'1px solid lightgrey',textTransform:'none', pointerEvents:'visible',marginTop:'0.5rem',color:'#1b1464',fontFamily:'Open Sans, sans-serif',backgroundColor:'white',width:'100%',padding:'3%'}}
        startIcon={<PublishIcon />}
      >
        <span>Upload</span>
      </Button>


</label>
       <Grid item>
       <Button
        variant="contained"
        component="span"
        style={{marginTop:'1.5rem',color:'white', textTransform:'none',backgroundColor:'#1b1464',width:'100%',padding:'2.5%',fontFamily:'Open Sans, sans-serif'}}
        onClick={()=>props.onClick()}
      >
        Share it with client
      </Button>
         </Grid>
     
  </Grid>    
      


    
     
     
 
  </form>
  </Paper>
  </Fade>
 </Grid>
     

   
  );
}

export default EditForm;
