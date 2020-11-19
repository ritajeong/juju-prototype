import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/views/Home'
import Community from './components/views/Community'
import List from './components/views/List'
import MyPage from './components/views/Mypage'
import Header from './components/Header/Header'
import NavBar from './components/views/NavBar/NavBar'

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'

function App() {
  return (
    <Router>
      <section>
        <div>
      <NavBar></NavBar>
      <Header></Header>
      </div>
      <div className="app">
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route path="/community" component={Community}/>
          <Route path="/list" component={List}/>
          <Route path="/mypage" component={MyPage}/>
          <Route exact path="/" component = { Auth(LandingPage,null,true)}/>
          <Route exact path="/login" component = {Auth(LoginPage,false)}/>
          <Route exact path="/register" component = {Auth(RegisterPage,false)}/>
        </Switch>
         </div>  
        </section>
    </Router>
  );
}

export default App;
 