const initialState = {count : 0}

function counterReducer(state, action) {
    switch (action.type) {
        case "increment":
            return {count : state.count+1}
            break;
        case "decrement":
            return {count : state.count-1}
            break;
        case "incrementByAmount":
            return {count: state.count + action.payload}
            break;
        case "decrementByAmount":
            return {count: state.count - action.payload}
            break;
        default:
            break;
    }
}

export {initialState, counterReducer}