let initialState = {
    userData: {},
    isFetching: false,
    isError: false
}

let FetchReducer=(state = initialState, action)=>{
    if(action.type === "FETCH_USER"){
        return Object.assign({}, state, {
            isFetching: true,
            userData: {},
            isError: false
        })
    }
    else if(action.type === "FETCHED_USER"){
        return Object.assign({}, state, {
            userData: action.payload,
            isFetching: false,
            isError: false
        })
    }
    else if(action.type === "RECEIVE_ERROR"){
        return Object.assign({}, state, {
            isFetching: false,
            isError: true
        })
    }
    else{
        return state
    }
}

export default FetchReducer