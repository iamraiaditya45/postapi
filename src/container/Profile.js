import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  logout: {
    "&.css-1e6y48t-MuiButtonBase-root-MuiButton-root":{
      // marginLeft:"1000px"
    }
  },
}));

function Profile() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className={classes.root}>
      <h1 variant="h6" className={classes.title}>
        Profile
      </h1>
      <div>
        <Button className={classes.logout} onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <h1 >
        Welcome {user.firstName} {user.lastName}
      </h1>
    </div>
  );
}
export default Profile;
