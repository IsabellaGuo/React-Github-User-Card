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
        
    }
}




