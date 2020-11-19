import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color : "white"
  },
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
          <Button color="inherit">회원가입</Button>
          <Button color="inherit">로그인</Button>
          <Button color="inherit">로그아웃</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}