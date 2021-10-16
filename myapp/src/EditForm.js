import Paper from '@material-ui/core/Paper';
import React, { useState,useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Logo from './logo.svg'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import PublishIcon from '@material-ui/icons/Publish';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  giveMargin:{
    margin:'2%  2% auto',
    
  }
  });


function EditForm(props) {
  const defaultValues = {
    name: "BlueMind",
  };
  const classes = useStyles();
  const [formValues, setFormValues] = useState(defaultValues);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      
    }
  }, [selectedImage]);
  
const handleLogoChange=(e)=>{
  setSelectedImage(e.target.files[0]);
  props.onChange(formValues.name,e.target.files[0],false)
}
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    props.onChange(e.target.value,selectedImage,false);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    props.onChange(formValues.name,selectedImage,true);
  };
  

  return ( <Grid container direction="column" style={{justifyContent:'center',backgroundColor:'whitesmoke',height:'100%'}}>
    <Paper  style={{margin:'10%'}}>
    <form onSubmit={handleSubmit}>
      <Grid item  style={{padding:'7%'}}>
        
      <TextField
        id="name-input"
        name="name"
        label="Advisor Name"
        type="text"
        variant="outlined"
        size="medium"
       style={{width:'100%'}}
        value={formValues.name}
        onChange={handleInputChange}
       />
        </Grid>
        <Grid item>
      
        <input accept="image/*" type="file" id="select-image" style={{ display: 'none',pointerEvents:'none' }} onChange={e => handleLogoChange(e)}/>
        <Box textAlign="center" component="span" style={{marginLeft:'2.3rem',marginRight:'1.5rem'}} >
   
   <img src={(selectedImage && imageUrl)?imageUrl:Logo} style={{pointerEvents:'none',border:'1px solid grey'}} width="48rem" height="48rem" />
 </Box>
        <label htmlFor="select-image" style={{pointerEvents:'none'}} >

 


<Button
  variant="contained"
  color="primary"
  component="span"
  style={{marginBottom:'2.5rem',pointerEvents:'visible'}}
  startIcon={<PublishIcon />}
>
  Change logo
</Button>

</label>
       
      <Fab type="submit" color="default" size="medium" variant="extended" style={{marginBottom:'2.5rem', marginLeft:'5.5rem'}}>
        <VisibilityIcon/>
        Preview
        </Fab>
  </Grid>    
      


    
     
     
 
  </form>
  </Paper>
 </Grid>
     

   
  );
}

export default EditForm;
