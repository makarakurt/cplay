import React from 'react';


const AuthView = props => {
    const { onClick } = props
    return (
            <div className="lyric-body">
                <div className="brand-content">
                    <div className="brand"> KUPLE </div>
                    <div className="brand-text"> LYRIC YOUR WAY OUT </div>
                </div>
                <div id="login">
                    <h1 className="auth-text"> Authentication Required </h1>
                    <input type="submit" className="custom-btn" value="Login with Spotify" onClick={onClick} />
                </div>
            </div>
    )
    
}

export default AuthView;