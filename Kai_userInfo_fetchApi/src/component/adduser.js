import React, { Component } from 'react';
import {database} from '../firebase'
import {OnUpdate} from '../action/index'
import {connect} from 'react-redux'

class AddUser extends Component{
     constructor(props){
         super(props);
          this.state={
              userId:"",
              userName:"",
              userAddress:"" 

            };
          
           }
      

        onChangeMd=(e)=>{
             this.setState({userId:e.target.value});
          }
          onChangeMd2=(e)=>{
             this.setState({userName:e.target.value});
           }
           onChangeMd3=(e)=>{
               this.setState({userAddress:e.target.value});
           }
   
    onSubmitMd=(e)=>{
         e.preventDefault();
       
            let Data={
            Id:this.state.userId,
            Name:this.state.userName,
            Address:this.state.userAddress}

           this.props.OnUpdate(Data);
           this.setState({userId:""});
           this.setState({userName:""});
           this.setState({userAddress:""});

        }

        


render(){
      console.log(this.state.userId)
         return(
           
            <div className="col-md-8 col-lg-8 text-center mx-auto">
            <form  onSubmit={this.onSubmitMd}>
             <div className="form-group  ">
               <label id="label" >Fill the details</label>
               <input type="text" className="form-control mt-3"  value={this.state.userId} onChange={this.onChangeMd} name="id"   placeholder="Enter User I d"/>
               <input type="text" className="form-control mt-3 userName"  value={this.state.userName} onChange={this.onChangeMd2} name="name"  placeholder=" Enter Name"/>
               <input type="text" className="form-control mt-3 userAddress" value={this.state.userAddress} onChange={this.onChangeMd3}  name="address"  placeholder="Enter Address"/>
               <button type="submit" className="btn btn-md mt-4 btn-primary">Submit</button>
             </div>
             </form>
             </div>
           
        )
    }
    
}



 
export default  connect(null,{OnUpdate})(AddUser);