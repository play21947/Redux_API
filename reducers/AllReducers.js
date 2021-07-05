import { combineReducers } from "redux";
import FetchReducer from './FetchReducer'

let AllReducers = combineReducers({
    github: FetchReducer
})

export default AllReducers