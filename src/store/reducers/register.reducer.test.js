import registerReducer from './register.reducer';

describe('Register Reducer', ()=>{
    it('should return default state', () => {
        const newState = registerReducer(undefined, {});
        expect(newState.users).toEqual([]);
    })

    it('should return new state if receiving ADD_USER type', () => {
        const username = 'florence';

        const newState = registerReducer(undefined, {
            type: 'ADD_USER',
            payload: username
        })
        expect(newState.users).toEqual([username])
    })

    it('should return new state if receiving DELETE_USER type', () => {
        let usersState = {users:['florence', 'nway']}
        const id = 2;

        const newState = registerReducer({...usersState}, {
            type: 'DELETE_USER',
            payload: id
        })
        console.log(newState.users[0], id)
        expect(newState.users).toEqual(['florence'])
    })
})