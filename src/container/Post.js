import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Group from "../image/Group.svg";
import Oval from "../image/Oval.svg";
import Text from "../image/text.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import swal from "sweetalert";
const useStyles = makeStyles((theme) => ({
  ppr: {
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      "&..css-rah4ii-MuiGrid-root": {
        backgroundColor: "red",
      },
    },
  },

  btn: {
    "&.css-1vhaqj4-MuiButtonBase-root-MuiButton-root": {
      backgroundColor: "#BBAACC",
      borderRadius: "30px",
      height: "60px",
      width: "500px",
      marginLeft: "20px",
      marginTop: "90px",
    },
    "&.css-1vhaqj4-MuiButtonBase-root-MuiButton-root:hover": {
      backgroundColor: "#BBAACC",
    },
  },
  sign: {
    color: "#BBAACC",
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
    color: "#BBAACC",
    [theme.breakpoints.down("sm")]: {
      color: "#BBAACC",
      position: "relative",
      height: "38px",
      width: "500px",
      right: "2.5%",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "25px",
      lineHeight: "27px",
      textAlign: "center",
      letterSpacing: "-0.278261px",
      color: "#BBAACC",
    },
  },
  enter: {
    position: "relative",
    height: "28px",
    right: "33%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    linehight: "28px",
    textAlign: "center",
    letterSpacing: "-0.208696px",
    color: "#BBAACC",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      width: "500px",
      height: "28px",
      right: "33%",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      linehight: "28px",
      textAlign: "center",
      letterSpacing: "-0.208696px",
      color: "#BBAACC",
    },
  },
  text: {
    width: "550px",
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      width: "550px",
      height: "60px",
      "&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root":{
        marginLeft: "150px",
      }
    },
  },
  ovImg: {
    marginTop: "100px",
    marginLeft: "162px",
    height: "112px",
    width: "114px",
    marginRight: "102px",
  },
  groupImg: {
    marginLeft: "78px",
    height: "435px",
    width: "645px",
  },
  ovalText: {
    display: "flex",
    marginBottom: "100px",
  },
  textok: {
    width: "183px",
    height: "45px",
    marginTop: "133px",
  },
  forgotPass: {
    marginLeft: "430px",
    marginBottom: "92px",
  },
  mainContainer: {
    backgroundColor: "#BBAACC",
    height: "100%",
    //  marginBottom:"210px",
  },
}));

async function loginUser(credentials) {
  return fetch("https://ohndevapi.appskeeper.in/v1/admin/login", {
    method: "POST",
    api_key: "OakHNAdmin",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      ip: "127.0.0.1",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Signin() {
  const classes = useStyles();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const theme = createTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });
    console.log(response);
    if (response["message"] == "Success") {
      console.log("yha tk aaya");
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 1000,
      }).then((value) => {
        localStorage.setItem("accessToken", response["data"]["token"]);
        localStorage.setItem("user", JSON.stringify(response["data"]));
        window.location.href = "/profile";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  };

  return (
    <div className={classes.mainContainer}>
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={6} className={classes.ppr}>
          <Box
            sx={{
              mx: 20,
              mt: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 className={classes.sign}>Sign In to the OAKWOOD Admin Panel</h1>
            <h1 className={classes.enter}>Enter the detail below</h1>
            <Box noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={classes.text}
                />
                <TextField
                  margin="normal"
                  required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  className={classes.text}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Grid container>
                  <Grid className={classes.forgotPass}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
                <FormControlLabel
                  control={
                    <Checkbox value="remember" required color="primary" />
                  }
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
              </form>
            </Box>
          </Box>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className={classes.ovalText}>
            <img className={classes.ovImg} src={Oval} />
            <img className={classes.textok} src={Text} />
          </div>
          <img className={classes.groupImg} src={Group} />
        </Box>
      </Grid>
    </div>
  );
}
