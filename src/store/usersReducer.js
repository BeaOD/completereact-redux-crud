const initialState = {
    users:[
        {
        name:'jay cool',
        email:'jc@gmail.com',
        gen:22,
        id:'123abc'
        },

        {
        name:'may kool',
        email:'jc@gmail.com',
        gen:22,
        id:'123abd'
        },

        {
        name:'kay chool',
        email:'jc@gmail.com',
        gen:22,
        id:'123abe'
      },
      ]
}


const usersReducer = (state= initialState , action) =>{
    switch (action.type) {
        case 'ADD_USER':
            const addUser = {
                name:action.payload.name,
                email:action.payload.email,
                gen:action.payload.gen,
            };
            return {...state, users: [...state.users, addUser]}
         
            case 'EDIT_USER':
                const editUser = state.users.map(user=>{
                   if(user.id === action.user_id) {
                       return {...user, ...action.updatedUser }
                   }
                   else{
                      return user;
                   }
                });
                return {...state, users: editUser}

        case 'DELETE_USER':
            const filteredUsers = 
                   state.users.filter(user => user.id !== action.payload);    
               return {...state, users: filteredUsers}
            
        default:
            return state;
    }

}



export default usersReducer 