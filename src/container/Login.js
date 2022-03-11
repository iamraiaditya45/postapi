import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles} from "@material-ui/core/styles";
import Group from '../image/Group.svg'
import Oval from '../image/Oval.svg'
import  Text from '../image/text.svg'

const useStyles = makeStyles((theme) => ({
    
    
    btn:{
        backgroundColor:"#BBAACC",
        "&.css-1vhaqj4-MuiButtonBase-root-MuiButton-root":{
            backgroundColor:"#BBAACC",
            borderRadius:"30px",
             height:"60px",
             width:"530px",
             marginLeft:"10px"
        },
    },
    sign:{
        color:"#BBAACC",
         position: "relative",
 height: "38px",
 right: "7.5%",
fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "32px",
 lineHeight: "37px",
textAlign: "center",
letterSpacing: "-0.278261px",
    },
    enter:{
      position: "relative",
      height: "28px",
      right: "33%",
      top: "calc(50% - 28px/2 - 236px)",      
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      linehight: "28px",
      textAlign: "center",
      letterSpacing: "-0.208696px",
      color: "#BBAACC",
    },
    text:{
      width:"550px",
      height:"60px"
    },
    ovImg:{
      marginTop:"100px",
      marginLeft:"162px",
      height:"112px",
      width:"114px",
      marginRight:"102px"
    },
    groupImg:{
      marginLeft:"78px",
      height:"435px",
      width:"645px"
    },
    ovalText:{
      display:"flex",
      marginBottom:"100px",
    },
    textok:{
width:"183px",
height:"45px",
marginTop:"133px"
    }
}));
export default function SignInSide() {
    const classes = useStyles();

    const theme = createTheme();
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
<ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
       
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              mx: 20,
              mt:15,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1  className={classes.sign}>
            Sign In to the OAKWOOD Admin Panel
            </h1>
            <h1 className={classes.enter}>Enter the detail below</h1>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                // fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                className={classes.text}
              />
              <TextField
                margin="normal"
                required
                // fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className={classes.text}

              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className={classes.btn}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>

              </Grid>
            </Box>
          </Box>
        </Grid>
         <Box sx={{
             display: 'flex',
             flexDirection: 'column',
            //  alignItems: 'center',
         }}
        
        >
          <div className={classes.ovalText}>

          
                         <img className={classes.ovImg} src={Oval}/>
                         <img className={classes.textok} src={Text}/>
                         </div>
               <img className={classes.groupImg} src={Group}/>
          </Box>
      </Grid>
    </ThemeProvider>
     );
    }