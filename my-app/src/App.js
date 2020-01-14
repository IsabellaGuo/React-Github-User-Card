import React from 'react';
import Axios from 'axios';
import UserCard from './Components/GithubUserCard';

class App extends React.Components {
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
            
            this.setState({
                name: response.data.name,
                email: response.data.email,
                login: response.data.login,
                avatar: response.data.avatar_url
            })
        })
    }
}




