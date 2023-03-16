

export function deletesReducer(state =[], action) {
    switch (action.type) {
        case "DELETE_DATA":
            return [...state,action.payload]

        default:
            return state
    }
}

