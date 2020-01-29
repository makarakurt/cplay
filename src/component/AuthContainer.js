import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { injectIntl } from "react-intl";
import AuthView from './AuthView';
import { DEEP_LINK_URL, CLIENT_ID, SPOTIFY_LOGIN_URL_1, SPOTIFY_LOGIN_URL_2 } from '../Constants';

 
class AuthContainer extends Component {
    
    componentDidMount() {
        let localStorage = window.localStorage;
        if (localStorage && localStorage.getItem('auth')) {
            let accessToken = localStorage.getItem('auth');
            window.location.href = DEEP_LINK_URL + accessToken;
        }
    }

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
        let url = SPOTIFY_LOGIN_URL_1 + state + SPOTIFY_LOGIN_URL_2 + CLIENT_ID;
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
export default withRouter((injectIntl(AuthContainer)));