import { combineReducers } from 'redux'
const searchs = {
    txt: '',
    user: 'wang'

}

function search(state=searchs,action) {
    switch (action.type) {
        case 'SEARCH':
            return Object.assign(state, action.data)
            break;
        default:
            return state

    }
}

export {search}
