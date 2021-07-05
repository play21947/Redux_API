let UserInfo=({user})=>{
    return(
        <div>
            <div>{user.login}</div>
            <img src={user.avatar_url}></img>
            <h2>Following : {user.following}</h2>
        </div>
    )
}

export default UserInfo

