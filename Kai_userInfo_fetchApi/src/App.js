import React, { Component } from 'react';
import Navigation from './component/navigation/navigation'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './component/home'
import AddUser from './component/adduser'
import Sign from "./component/sign";

class App extends Component{
 
 render(){
    return (
     <React.Fragment>
       <Navigation/>
       <div className="container mt-5"> <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/home" component={Home}/>
             <Route path="/addUser" component={AddUser}/>
             <Route path="/sign" component={Sign}/>
          
       </Switch></div>
      


     </React.Fragment>
    )}
  
}

export default App;
