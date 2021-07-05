let initialState = {
    userData: {},
    isFetching: false,
    isError: false
}

let FetchReducer=(state = initialState, action)=>{
    if(action.type === "FETCH_USER"){
        return{
            isFetching: true,
            userData: {},
            isError: false
        }
    }
    else if(action.type === "FETCHED_USER"){
        return{
            userData: action.payload,
            isFetching: false,
            isError: false
        }
    }
    else if(action.type === "RECEIVE_ERROR"){
        return {
            isFetching: false,
            isError: true
        }
    }
    else{
        return state
    }
}

export default FetchReducer