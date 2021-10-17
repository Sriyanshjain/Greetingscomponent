import Paper from '@material-ui/core/Paper';
import React, { useState,useEffect } from "react";
import { Grid, requirePropFactory, Typography } from "@material-ui/core";
import Logo from './logo.svg'
import BirthdayO1 from './assets/1-01.png';
import BirthdayO2 from './assets/1-02.png';
import { makeStyles } from '@material-ui/core/styles';
import EditForm from './EditForm';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import AnnO1 from './assets/1-07.png';
import AnnO2 from './assets/1-03.png';
import Share from './Share';
const useStyles = makeStyles({
 backgroundClass:{
  
  backgroundPosition:'center',
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  height:'120vh',
  backgroundPosition:''
 }
  });
function App(){
  const classes=useStyles();
 const [imageUrl, setImageUrl]=useState();
 const [nameState, setNameState]=useState();
const [backImage, setbackgroundImage]=useState(null);
const [nameColor, setnameColor]=useState("#211a68");
const [wishText, setwishText]=useState("wishes");
 const [shareState,setShareState]=useState(false);
 const templates=[
  {   
    image:BirthdayO2,
    templatename:"Yellow Candy",
    color:"#ffffff",
    wishtext:"wishes"
  },
  {
    image:BirthdayO1,
    templatename:"Purple Panda",
    color:"#211a68",
    wishtext:"wishes"
  },
  {
    image:AnnO1,
    templatename:"Pink Panther",
    color:"#ed3972",
    wishtext:"wishes you"
  },
  {
    image:AnnO2,
    templatename:"Golden Circle",
    color:"#9b7245",
    wishtext:"wishes you"
  }
]
 const changeBackgroundImage=(img)=>
 { 
   
   console.log(img.value);
   var FOUND = templates.findIndex(function(post, index) {
    if(post.templatename == img.value.toString())
      return true;
  });
   console.log(FOUND);
  setbackgroundImage(templates[FOUND].image);
  setnameColor(templates[FOUND].color);
  setwishText(templates[FOUND].wishtext);
   // Create an empty canvas element
  //  var canvas = document.createElement("canvas");
  //  canvas.width = img.width;
  //  canvas.height = img.height;
 
   // Copy the image contents to the canvas
  //  var ctx = canvas.getContext("2d");
  //  ctx.drawImage(img, 0, 0);
 
   // Get the data-URL formatted image
   // Firefox supports PNG and JPEG. You could check img.src to
   // guess the original format, but be aware the using "image/jpg"
   // will re-encode the image.
  //  var dataURL = canvas.toDataURL("image/png");
 
  //  var x= dataURL.replace(/^data:image\/(png|jpg);base64,/, "")
  // var y= dataURLtoFile(dataURL,"myfile");
  // console.log(y);
  
 }
//  function dataURLtoFile(dataurl, filename) {
//   var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
//       bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
//       while(n--){
//           u8arr[n] = bstr.charCodeAt(n);
//       }
//       return new File([u8arr], filename, {type:mime});
//   }
 const toggleShareState=()=>{
  
   setShareState(!shareState);
 }
 const handleChange=(value,image)=>{
   
  setNameState(value);
 if(image)

  { console.log(image);
    setImageUrl(URL.createObjectURL(image));}

}

    return(
   <div className="App" >
     <Fade in={true}>
 <Paper elevation={0} >
       <Grid container direction="row">
      
         <Grid item  xs={6} style={{height:'110vh'}}>
        
    { (shareState==true) ? < Share onClick={()=>setShareState(false)}/>:<EditForm changeBackgroundImage={changeBackgroundImage} onClick={()=>toggleShareState()} onChange={(value,image)=> handleChange(value,image)} />}
   
           </Grid>
           <Fade in={true}>
         <Grid item xs={6} className={classes.backgroundClass} style={{backgroundImage:(backImage)?`url(${backImage})`: `url(${BirthdayO1})`}}>
        
         <Grid container direction="column" alignItems="center"  >
          
            

<Grid container direction="row">
  <Grid item xs={3}> 
<img src={imageUrl?imageUrl: Logo} style={{height:'4rem' ,width:'5rem',padding:'2% '}}/>
</Grid>
<Grid item xs={6} style={{textAlign:'center'}}>

  <Typography variant='h2' style={{color:(nameColor),fontFamily:'Antonio, sans-serif',textTransform:'uppercase'}}>{nameState?nameState:"BLUEMIND"}</Typography>
  
</Grid>
<Grid item xs={3}/>
  </Grid>


<Grid item>
<Typography style={{fontFamily: 'Great Vibes, cursive',color:(nameColor),fontSize:'2.5rem'}}>{wishText}</Typography>
  
</Grid>





</Grid>

           </Grid>
           </Fade>
         </Grid>
    
     
      

    
        
     
        
        
       
  
        
        
      </Paper>
      </Fade>
</div>      
        
         
    )
}
export default App;

