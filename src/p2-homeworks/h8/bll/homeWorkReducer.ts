import {UserType} from "../HW8";
type ActionType = {
    type: "SORT" | "CHECK"
    payload: "UP" | "DOWN" | number
}
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "SORT": {
            switch (action.payload) {
                case "UP":
                    const upState = [...state]
                    return  upState.sort((a, b) => a.name <= b.name ? 1 : -1);
                case "DOWN":
                    const downState = [...state]
                    return  downState.sort((a, b) => a.name <= b.name ? 1 : -1).reverse();
            }
            return state
        }
        case "CHECK": {
            return  state.filter(item => item.age >= 18);
        }
        default: return state
    }
}