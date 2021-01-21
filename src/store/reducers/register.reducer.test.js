import registerReducer from './register.reducer';

const initialState = {
    users: []
}

describe('Register Reducer', ()=>{
    it('should return default state', () => {
        const newState = registerReducer(initialState, {});
        expect(newState.users).toEqual([]);
    })

    it('should return new state if receiving ADD_USER type', () => {
        const username = 'florence';

        const newState = registerReducer(initialState, {
            type: 'ADD_USER',
            payload: username
        })
        expect(newState.users).toEqual([username])
    })

    it('should return new state if receiving DELETE_USER type', () => {
        let usersState =  {users:[{id:1,name:'florence'},{id:2, name:'nway'}]}
        const id = 2;

        const newState = registerReducer({...usersState}, {
            type: 'DELETE_USER',
            payload: id
        })
        
        expect(newState.users[0].name).toEqual('florence')
    })
})