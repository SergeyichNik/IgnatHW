import {AppStoreType} from "./store";

export const SET_LOAD = 'SET_LOAD'
export const SET_LOAD_END = 'SET_LOAD_END'


type SetLoadActionType = {
    type: typeof SET_LOAD,
    payload: {
        isLoad: boolean
    }
}

type SetLoadEndActionType = {
    type: typeof SET_LOAD_END,
    payload: {
        isLoad: boolean
    }
}


export type ActionsType = SetLoadActionType | SetLoadEndActionType

type InitStateType = {
    isLoad: boolean
}

const initState: InitStateType = {
    isLoad: false
}

export const loadingReducer = (state = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case SET_LOAD:
        case SET_LOAD_END: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: return state
    }
}

export const loadingAC = (): SetLoadActionType => {
    return {
        type: SET_LOAD,
        payload: {
            isLoad: true
        }
    }
} // fix any
export const loadingEndAC = (): SetLoadEndActionType => {
    return {
        type: SET_LOAD_END,
        payload: {
            isLoad: false
        }
    }
}

export const selectLoadState = (state: AppStoreType) => state.loading