let id = 1;

export const addUser = (username) => {
    return {
        type: 'ADD_USER',
        payload: {id: id++, username}
    } 
}

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: id
    } 
}

export const moveUp = (id) => {
    return {
        type: 'MOVE_UP',
        payload: id
    } 
}

export const moveDown = (id) => {
    return {
        type: 'MOVE_DOWN',
        payload: id
    } 
}