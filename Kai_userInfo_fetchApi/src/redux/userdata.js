

const UserData = (state={},action)=>{
    console.log(" user fetch reduser data",action.payload)
   
    switch(action.type){
         case "User_Data":
            return action.payload;
           
        default :
         return state; 
    }
}

export default UserData;