import {Component} from 'react';
import { withRouter } from "react-router-dom";
import { injectIntl } from "react-intl";
import history from "../history";
import { DEEP_LINK_URL, CLIENT_ID, CLIENT_SECRET, SPOTIFY_TOKEN_URL, REDIRECT_URL, GRANT_TYPE } from '../Constants';
const axios = require('axios');
const queryString = require('query-string');

class Callback extends Component {
    constructor(props) {
        super(props)

        this.state = {
            code: null,
            state: null
        }
    }

    componentDidMount () {
        var parsed = queryString.parse(this.props.location.search);
        this.setState({code: parsed.code, state: parsed.state}, () => this.getAccessToken());
    }


    getAccessToken = () => {
        const clientId = CLIENT_ID;
        const clientSecret = CLIENT_SECRET;
        const url = SPOTIFY_TOKEN_URL;
        const requestBody = {
            redirect_uri: REDIRECT_URL,
            code: this.state.code,
            grant_type: GRANT_TYPE
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
            localStorage.setItem('token', accessToken);
            window.location.href = DEEP_LINK_URL + accessToken;    
        })
        .catch((err) => {
            history.push('/')
        })
    }

    render () {
        return null;
    }
}

export default withRouter((injectIntl(Callback)));
