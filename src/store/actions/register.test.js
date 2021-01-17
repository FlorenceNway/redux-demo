import * as actions from './register.action'

describe('register actions', () => {
    it('should create an action to add a user', () => {
        const username = 'Florence'
        let id = 1;
        const expectedAction = {
            type: 'ADD_USER',
            payload: {id: id++, username}
        }
        expect(actions.addUser(username)).toEqual(expectedAction)
    })

    it('should create an action to delete a user', () => {
        let id = 1;
        const expectedAction = {
            type: 'DELETE_USER',
            payload: id
        }
        expect(actions.deleteUser(id)).toEqual(expectedAction)
    })

    it('should create an action to move up a user', () => {
        let id = 1;
        const expectedAction = {
            type: 'MOVE_UP',
            payload: id
        }
        expect(actions.moveUp(id)).toEqual(expectedAction)
    })

    it('should create an action to move down a user', () => {
        let id = 1;
        const expectedAction = {
            type: 'MOVE_DOWN',
            payload: id
        }
        expect(actions.moveDown(id)).toEqual(expectedAction)
    })
})