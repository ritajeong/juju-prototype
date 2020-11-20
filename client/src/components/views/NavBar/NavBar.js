import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color : "white"
  },
  link:{
    float: "right",
    padding: "6px",
    color : "white",
    '&:hover': {
      color: "#808dd4",
   },
  }
}));



export default function NavBar(){
  const navbar = useStyles();
  return (
    <div className={navbar.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">💪🏻</Button>
          <Typography variant="h6" className={navbar.title}>
            내 주변 헬스장을 찾아보자!
          </Typography>
          <NavLink to="/register" className={navbar.link} activeClassName="active"> 회원가입 </NavLink>
          <NavLink to="/login" className={navbar.link} activeClassName="active"> 로그인 </NavLink>
          <NavLink to="/logout" className={navbar.link} activeClassName="active"> 로그아웃 </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}