import React, { Component } from 'react';






class Child extends Component {
 
     constructor(props){
         super(props)
         console.log(this.props);
     }
   
  render(){
   
       if(this.props.responses-1){
        return(   <React.Fragment>
        <div className="container kai"  style={{textAlign:"center",marginTop:"200px"}} >
          <h1>hello i  am child</h1>
           <p> {this.props.responses.id}</p>
         </div>
          </React.Fragment>)
     
       }
       else{
           return(
               <div><h1>value of parameter null</h1></div>
           )
       }

          
    
     }
  
}

export default Child;