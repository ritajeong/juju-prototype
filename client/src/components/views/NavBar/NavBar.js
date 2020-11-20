import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import axios from 'axios'  


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
   }
  },
  button:{
    float: "right",
    padding: "6px",
    color : "white",
    '&:hover': {
      color: "#808dd4",
   }
  }
}));


function NavBar(props) {
  useEffect(() =>{
    axios.get('/api/hello')
        .then(response =>{console.log(response)})
},[])

  const onClickHandler = () => {
    axios.get(`/api/users/logout`)
        .then(response => {
            if (response.data.success) {
                props.history.push("/login")
            } else {
                alert('로그아웃 하는데 실패 했습니다.')
            }
        })
  }

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
          <Button className={navbar.button} onClick={onClickHandler}> 로그아웃 </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar)