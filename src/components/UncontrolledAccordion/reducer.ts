export const SET_COLLAPSED = "SET-COLLAPSED"

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case SET_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error("Bad action type")
    }
    return state
}