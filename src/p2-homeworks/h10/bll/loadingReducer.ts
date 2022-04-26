import {AppStoreType} from "./store";

export enum ACTIONS_TYPES {
    SET_LOAD = 'SET_LOAD',
    SET_LOAD_END = 'SET_LOAD_END',
    SET_CURRENT_THEME = 'SET_CURRENT_THEME'
}




type SetLoadActionType = {
    type: ACTIONS_TYPES.SET_LOAD,
    payload: {
        isLoad: boolean
    }
}

type SetLoadEndActionType = {
    type: ACTIONS_TYPES.SET_LOAD_END,
    payload: {
        isLoad: boolean
    }
}

type SetCurrentThemeActionType = {
    type : ACTIONS_TYPES.SET_CURRENT_THEME,
    payload: {
        currentTheme: string
    }
}


export type ActionsType = SetLoadActionType | SetLoadEndActionType | SetCurrentThemeActionType

type InitStateType = {
    isLoad: boolean
    themePage: {
        currentTheme: string
        themeKit: string[]
    }

}

const initState: InitStateType = {
    isLoad: false,
    themePage: {
        currentTheme: 'red',
        themeKit: ['red', 'green', 'dark', 'light', 'purpleBlue', 'redYellow']
    }
}

export const loadingReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case ACTIONS_TYPES.SET_LOAD:
        case ACTIONS_TYPES.SET_LOAD_END: {
            return {
                ...state,
                ...action.payload
            }
        }
        case ACTIONS_TYPES.SET_CURRENT_THEME:
            return {
                ...state,
                themePage: {...state.themePage, currentTheme: action.payload.currentTheme}
            }
        default: return state
    }
}

export const loadingAC = (): SetLoadActionType => {
    return {
        type: ACTIONS_TYPES.SET_LOAD,
        payload: {
            isLoad: true
        }
    }
} // fix any
export const loadingEndAC = (): SetLoadEndActionType => {
    return {
        type: ACTIONS_TYPES.SET_LOAD_END,
        payload: {
            isLoad: false
        }
    }
}

export const setCurrentTheme = (currentTheme: string): SetCurrentThemeActionType => {
    return {
        type: ACTIONS_TYPES.SET_CURRENT_THEME,
        payload: {
            currentTheme
        }
    }
}

export const selectLoadState = (state: AppStoreType) => state.loading
export const selectThemeState = (state: AppStoreType) => state.loading.themePage