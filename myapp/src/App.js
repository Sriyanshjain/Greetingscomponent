import Paper from '@material-ui/core/Paper';
import React, { useState,useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Logo from './logo.svg'
import Birthday from './assets/myb.png';
import { makeStyles } from '@material-ui/core/styles';
import EditForm from './EditForm';
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Share from './Share';

function App(){
 const [imageUrl, setImageUrl]=useState();
 const [nameState, setNameState]=useState();
 const [previewState,setPreviewState]=useState(false);
 const [shareState,setShareState]=useState(false);
 const toggleShareState=()=>{
   setPreviewState(false);
   setShareState(true);
 }
 const handleChange=(value,image,pstate)=>{
   setPreviewState(pstate);
  setNameState(value);
 if(image)
  {setImageUrl(URL.createObjectURL(image));}

}

    return(
   <div className="App">
 <Paper elevation={0} style={{backgroundColor:'thistle'}}>
       <Grid container direction="row">
         <Grid item  xs={previewState?false:6} style={{display:(previewState?"none":'')}}>
     
    { (shareState==true) ? < Share onClick={()=>setShareState(false)}/>:<EditForm onChange={(value,image,pstate)=> handleChange(value,image,pstate)} />}
           </Grid>
         <Grid item xs={previewState?12:6} >
         <Grid container direction="column" alignItems="center" >
           <Grid container direction="row" style={{ display:(previewState?'':'none')}}>
             <Grid item xs={3} style={{padding:'2%'}}>
               <Button variant="outlined" startIcon={<NavigateBeforeIcon/>} onClick={()=>setPreviewState(false)}>Back to Edit mode</Button>
               </Grid>
               <Grid item xs={6}/>
               
            
               <Grid item xs={3} style={{padding:'2%',textAlign:'end'}} >
               <Button variant="outlined" endIcon={<NavigateNextIcon/>} onClick={()=>toggleShareState()} >Share</Button>
               </Grid>
             </Grid>
<Grid item>
<img src={imageUrl?imageUrl: Logo} style={{height:'5rem' ,width:'10rem'}}/>
  </Grid>

<Grid item>

  <Typography variant='h1'>{nameState?nameState:"BlueMind"}</Typography>
  
</Grid>
<Grid item>
<Typography>wishes you</Typography>
  
</Grid>

<Grid item>
<img src={Birthday} style={{height:'25rem',width:'100%'}}/>
</Grid>




</Grid>

           </Grid>
         </Grid>
    
     
      

    
        
     
        
        
       
  
        
        
      </Paper>
</div>      
        
         
    )
}
export default App;

