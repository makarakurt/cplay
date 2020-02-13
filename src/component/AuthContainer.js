import React, {Component} from 'react';
import AuthView from './AuthView';
 
class AuthContainer extends Component {
    
    generateRandomString = length => {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    onClick = () => {
        let state = this.generateRandomString(16);
        let clientId = '';
        let url = 'https://accounts.spotify.com/tr/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Duser-read-private%2Buser-read-email%2Buser-top-read%2Buser-read-currently-playing%2Buser-modify-playback-state%2Buser-read-playback-state%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fmakarakurt.github.io%252Fcplay%26state%3D' + state + '%26client_id%3D' + clientId;
        window.location.href = url;
    }

    render () {
        return (
            <AuthView 
                onClick={this.onClick}
            />
        )
    }
}
export default AuthContainer;