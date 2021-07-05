import store from "../index"
import Axios from 'axios'

export let fetch_post=()=>{
    return{
        type: "FETCH_USER"
    }
}

export let receive_post=(post)=>{
    return{
        type: "FETCHED_USER",
        payload: post
    }
}

export let receive_error=()=>{
    return{
        type: "RECEIVE_ERROR"
    }
}

export let thunk_action_creator = (username) =>{
    const user = username
    store.dispatch(fetch_post());
    return ((dispatch, getState)=>{
        return Axios.get("https://api.github.com/users/"+user).then((res)=>{
            if(res.data === "Not Found"){
                throw new Error("No Such user found")
            }else{
                dispatch(receive_post(res.data))
            }
        })
        .catch(err => dispatch(receive_error))
    })
}