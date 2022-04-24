import { combineReducers} from 'redux'
import { legacy_createStore as createStore} from 'redux'
import {loadingReducer} from './loadingReducer'
import {configureStore} from "@reduxjs/toolkit";

const reducers = combineReducers({
    loading: loadingReducer,

})

const store = createStore(reducers)
export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
