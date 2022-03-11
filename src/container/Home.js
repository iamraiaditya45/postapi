import React from 'react'
import { makeStyles} from "@material-ui/core/styles";
import Loginpage from './Post';
// import Forget from './Forget';


const useStyles = makeStyles((theme) => ({
    
mainContainer:{
    backgroundColor:"#BBAACC",
    height:"100%",
    //  marginBottom:"210px",
}
  }));
 const Home = () => {
    const classes = useStyles();
    // const axios = require('axios');

    return (
           <div className={classes.mainContainer} >
             {/* axios.get('/user?ID=12345')
             .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  }); */}
{/* axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  }); */}
  {/* axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  }); */}
  
               <Loginpage/>
               {/* <Forget/> */}
             </div>
    )
}
 export default Home;