

export function tamamReducer(state =[], action) {
    switch (action.type) {
        case "TAMAM_DATA":
            return [...state,action.payload]

        default:
            return state
    }
}

