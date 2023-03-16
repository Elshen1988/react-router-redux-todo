export const ListActionAdd = (payload) => {
    return ({ type: "GET_DATA", payload })
}

export const ListActionTamam = (payload) => {
    return ({ type: "TAMAM_DATA", payload })
}
export const ListActionDelete = (payload) => {
    return ({ type: "DELETE_DATA", payload })
}