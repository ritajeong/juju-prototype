import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/views/Home'
import Community from './components/views/Community'
import Map from './components/views/Map'
import MyPage from './components/views/Mypage'
import Header from './components/Header/Header'
import NavBar from './components/Header/NavBar'
 
import LoginPage from './components/views/LoginPage'
import RegisterPage from './components/views/RegisterPage' 
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
          <Route exact path="/" component={Home}/>
          <Route exact path="/community" component={Community}/>
          <Route exact path="/map" component={Map}/>
          <Route exact path="/mypage" component={MyPage}/> 
          <Route exact path="/login" component = {Auth(LoginPage,false)}/>
          <Route exact path="/register" component = {Auth(RegisterPage,false)}/>
        </Switch>
         </div>  
        </section>
    </Router>
  );
}

export default App;
 