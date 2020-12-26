import {createStore, applyMiddlewaren ,compose } from "redux"
import thunk from "redux-thunk"

export default store = createStore(
    {},
    compose( applyMiddlewaren(thunk) )
