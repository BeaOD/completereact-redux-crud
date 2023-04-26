export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export const editUser = (user_id, updatedUser) => {
    return {
        type: 'EDIT_USER',
        user_id: user_id,
        updatedUser: updatedUser 
    }
}

export const deleteUser = (user_id) => {
    return {
        type: 'DELETE_USER',
        payload: user_id
    }
}