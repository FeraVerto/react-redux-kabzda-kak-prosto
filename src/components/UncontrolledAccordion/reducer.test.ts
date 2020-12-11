import {reducer, SET_COLLAPSED, StateType} from "./reducer";


test("collapsed should be changed", () => {
    const state: StateType = {
        collapsed: false
    }

    let action = {type: SET_COLLAPSED}

    let newState = reducer(state, action)

    expect(newState.collapsed).toBe(true);
})

test("error", () => {
    const state: StateType = {
        collapsed: false
    }

    expect(() => {
        reducer(state, {type: "FAKE"})
    }).toThrowError();
})