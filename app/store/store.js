import { createStore } from 'redux'
import { search } from "./reducer";



let store = createStore(search)

export default store;