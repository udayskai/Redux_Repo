import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Qus extends Component {

   constructor(){
     super();
     this.state={
               data:[],
               first:0,
               console1:{},
               switch:true,

     }
   }

   componentDidMount(){
      fetch(`https://www.mocky.io/v2/56fcf6871000000e13aed252`)
       .then(response=>response.json())
       .then(info=>{ this.setState({data:info.slice(0,7)},()=>{console.log(this.state.data)})})
    
     
   }


   onClickMethod=()=>{
    this.setState({switch:false});
    this.setState({console1:this.state.data[this.state.first]})
    this.setState({first:this.state.first+1})
    
    // console.log(this.state.console1,"here th mian data",this.state.first)
  }

  render()
 {
   if(this.state.switch===true){
        return(
              <div className="text-center switch " style={{marginTop:"150px"}} >
              <button type="button" className="btn btn-primary  pb-4 mt-5 btn-lg "  style={{height:"60px",width:"200px",fontSize:"38px"}} onClick={this.onClickMethod}>Ready</button>
              </div>
            )
        
     }

     else{
           if (this.state.first<6){
            return (
                 <div className="App container">
                     <button type="button" className="btn btn-danger mt-5 btn-lg pl-4 pr-4 pt-2 pb-2" onClick={this.onClickMethod}>Next Qus</button>
                      <h1  className="mt-5" style={{color:"gray" ,backgroundColor:"White"}} >{this.state.console1.title}</h1>
                      <p className="mt-5" style={{fontSize:"19px"}}>{this.state.console1.description}</p>
                 </div> )
          }

          else{
             return (
                <div style={{textAlign:"center",marginTop:"150px"}}> <Link  to="/"className="btn btn-success btn-lg" type="submit"> Submit the Survey</Link>  
                <p>Thank you</p></div>
            
              )
          } }
     
}
}

export default Qus;
