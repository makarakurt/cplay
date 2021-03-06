import React, {Component} from 'react';
const axios = require('axios');
const queryString = require('query-string');

class Callback extends Component {
    constructor(props) {
        super(props)

        this.state = {
            code: null
        }
    }

    componentDidMount () {
        this.setState({code: this.props.code}, () => this.getAccessToken());
    }


    getAccessToken = () => {
        const clientId = '';
        const clientSecret = '';
        const url = 'https://accounts.spotify.com/api/token';
        const requestBody = {
            redirect_uri: '',
            code: this.state.code,
            grant_type: 'authorization_code'
        }

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
            }
        }

        axios.post(url, queryString.stringify(requestBody), config)
        .then((result) => {
            let accessToken = result.data.access_token;
            console.log({accessToken});
            window.location.href = 'cplay://auth?token=' + accessToken;    
        })
        .catch((err) => {})
    }

    render () {
        return (
            <div className="lyric-body">
                <div className="brand-content">
                    <div className="brand"> KUPLE </div>
                    <div className="brand-text"> THIS IS WHY WE LISTEN </div>
                </div>
                <div id="login">
                    <h1 className="auth-text">  </h1>
                </div>
            </div>
        )
    }
}

export default Callback;
