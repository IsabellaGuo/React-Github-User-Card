import React from 'react';
import Axios from 'axios';
import UserCard from './Components/GithubUserCard';
import './Components/App.css';

class App extends React.Component {
    constructor (){
        super()
        this.state = {
            name: '',
            email: '',
            login: '',
            avatar: '',
            followers: []
        }
    }

    componentDidMount () {
        Axios
        .get('https://api.github.com/users/IsabellaGuo')
        .then (response => {
            console.log (response.data.name)
            this.setState({
                name: response.data.name,
                email: response.data.email,
                login: response.data.login,
                avatar: response.data.avatar_url
            })
        })

        Axios
        .get('https://api.github.com/users/IsabellaGuo/followers')
        .then (response => {
            console.log(response)
            this.setState ({
                followers: response.data
            })
        })
    }

    render() {
        return(
            <div className = 'title'>
            <h1>Isabella's Card</h1>
            <div className = 'App'>
            
             {this.state.followers.map(follower => {
               return (
                 
                 <div className = 'followers'> 
                 <img src = {follower.avatar_url} className = 'avatar' />
                  <div className = 'followersinfo'>
                    <p>{follower.name}</p>
                    <p>USERNAME: {follower.login}</p>
                    <p>{follower.html_url}</p>
                    <p>{follower.location}</p>
                  </div>
                   
                 </div>
                 
               )
              }
              )}
              <div className = 'me'>
              <UserCard 
              name = {this.state.name}
              email = {this.state.email}
              login = {this.state.login}
              avatar = {this.state.avatar}
              />
              </div>
          </div>
          </div>
        )
    }
}

export default App;


