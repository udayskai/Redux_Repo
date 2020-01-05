import React, { Component } from 'react';
import { GoogleSignIn } from "../action/index";
import { connect } from "react-redux";



class Sign extends Component{
    


    render(){
         return(
        <div id="Mainbutton">

           <button id="Mainbutton1"  className="btn btn-primary btn-lg " onClick={()=>this.props.GoogleSignIn()}> Click Me</button>

        </div>
    )}
   
}


export default connect(null,{GoogleSignIn})(Sign) ;

