import React, { Component } from  'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {FetchData} from '../../action/index'




class Navbar extends Component {
      constructor(){
          super();
          console.log(this.props)
      }

componentDidMount(){this.props.FetchData();

}

render()
        {return( <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            <Link className="nav-item nav-link active" to="/home">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="/addUser">Add User</Link>
            <Link className="nav-item nav-link" to="/sign"> Sign </Link>
         </div>
       </nav>)}
       }


       const mapStateToProps=(state)=>{
           console.log("props from userdata",state);
           return {state}

       }

export default connect(mapStateToProps,{FetchData})(Navbar);
