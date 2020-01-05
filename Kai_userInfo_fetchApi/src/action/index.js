
import {database,auth,googleProvider} from '../firebase';


export  const OnRemove = (id)=>{
    console.log("oppo")
 return async (dispatch)=>
 {database.child(id).remove();}
}

  


export  const OnUpdate = (data)=>{
    return async (dispatch)=>
 {database.push(data)}
}

export const GoogleSignIn=()=>{
   return async(dispatch)=>{
      await auth.signInWithPopup(googleProvider)
  }
} 



export const FetchData=()=>{
   return async(dispatch)=>{
      await auth.onAuthStateChanged(data=>{dispatch({type:"User_Data",payload:data})
   })
  }
} 
  



// const OnFetch = ()=>{
//     console.log("oppo")
//  return async (dispatch)=>
//  {database.child(id).remove();}
// }

//  