let initialState = {
    users: []
}
const users = (state = initialState, {type,payload}) => {
    switch(type) {
        case 'ADD_USER':
            return {...state, users: [...state.users, payload]}
        case 'DELETE_USER':
            const localUsers = [...state.users]
            const newUsers = localUsers.filter(user => user.id !== payload)
            return {...state, users: [...newUsers]}
        case 'MOVE_UP':
            const moveUpUsers = [...state.users]
            const selectedUserIndex = moveUpUsers.findIndex(user => user.id === payload)
            const selectedUser = moveUpUsers.splice(selectedUserIndex, 1)
            moveUpUsers.splice(selectedUserIndex - 1, 0, ...selectedUser)
            return {...state, users: [...moveUpUsers]}
        case 'MOVE_DOWN':
            const moveDownUsers = [...state.users]
            const selectUserIndex = moveDownUsers.findIndex(user => user.id === payload)
            const selectUser = moveDownUsers.splice(selectUserIndex, 1)
            moveDownUsers.splice(selectUserIndex + 1, 0, ...selectUser)
            return {...state, users: [...moveDownUsers]}
       
        default:
            return state;
    }
} 
export default users; 