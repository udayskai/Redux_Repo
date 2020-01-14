
import {database,auth,googleProvider} from '../firebase';

//remove
export  const OnRemove = (id)=>{
    console.log("oppo")
 return async (dispatch)=>
 {database.child(id).remove();}
}

  

//update
export  const OnUpdate = (data)=>{
    return async (dispatch)=>
 {database.push(data)}
}

//signIn
export const GoogleSignIn=()=>{
   return async(dispatch)=>{
      await auth.signInWithPopup(googleProvider)
  }
} 



export const FetchData=()=>{
   return async(dispatch)=>{
      await auth.onAuthStateChanged(data=>{ dispatch({type:"User_Data",payload:data})
   })
  }
} 
  



