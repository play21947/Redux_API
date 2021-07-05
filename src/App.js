import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {thunk_action_creator} from './actions/FetchActions'
import UserInfo from './UserInfo';

function App() {

  let getUsername
  let dispatch = useDispatch()

  let data = useSelector(state => state.github)

  let handleSubmit=(e)=>{
    e.preventDefault()
    let username = getUsername.value;
    dispatch(thunk_action_creator(username))
    getUsername.value = ""
  }
  console.log(data)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Enter The Github Username</h2>
        <input ref={input => (getUsername = input)} type="text" placeholder="Enter Github Username" required></input>
        <button>Submit</button>
      </form>
      {data.isFetching ? <h2>Loading...</h2> : null}
      {data.isError ? <h2>No Such user exists.</h2> : null}
      {Object.keys(data.userData).length > 0 ? <UserInfo user={data.userData}/> : null}
    </div>
  );
}

export default App;
