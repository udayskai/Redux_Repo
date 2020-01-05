

const UserData = (state={},action)=>{
    console.log("user avtion")
    switch(action.type){
         case "User_Data":
            return action.payload;
        default :
         return state;
    }
}

export default UserData;