import React, { Component } from 'react';
import {database} from '../firebase'
import _ from 'lodash';
import {OnRemove, FetchData} from '../action/index';
import {connect} from 'react-redux';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            userDatabase:""
        }
        console.log(props,"eeeee");
    }



    componentDidMount(){
    database.on("value",(snapshot)=>{this.setState({userDatabase:snapshot.val()});
     })
    }


    render(){
        return(
           <React.Fragment>
               <h1 className="text-center" id="label">Data from database </h1>
           <div className="row">

               
                   {_.map(this.state.userDatabase,(value,key)=>(
                      <div className="col-md-4 col-lg-4 mt-4" key={key}>
                          <div className="card text-left  mx-auto text-center">
                         
                         <div className="card-body">
                              <h1 className="card-title" style={{color:"gray"}}>{value.Id}</h1>
                               <h4 className="card-text">{value.Name}</h4>
                               <p>{value.Address}</p>
                         </div>
                         <button type="button" className="btn btn-sm  btn-danger btn-inline" onClick={()=>{this.props.OnRemove(key)}}>Remove</button>
                       </div>
                   </div>
                    ))
                    }
                    </div>
              
          
           </React.Fragment>
             
        )
    }
};

// const mapStateToProps = state => {
//     return (state.data)

//   }
  

export default  connect(mapStateToProps,{OnRemove,FetchData})(Home);