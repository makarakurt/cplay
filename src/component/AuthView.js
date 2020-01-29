import React from 'react';


const AuthView = props => {
    const { onClick } = props
    return (
            <div className="lyric-body">
                <div id="login">
                    <h1 className="t-center">Authentication Required !!!</h1>
                    <input type="submit" className="custom-btn" value="Login with Spotify" onClick={onClick} />
                </div>
            </div>
    )
    
}

export default AuthView;