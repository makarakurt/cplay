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
        let url = 'https://accounts.spotify.com/tr/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Duser-read-private%2Buser-read-email%2Buser-top-read%2Buser-read-currently-playing%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcallback%26state%3D' + state + '%26client_id%3D' + '2de5eb630c1c47a685658609859ee19e';
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