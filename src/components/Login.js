import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(err => alert(err.message));
    };

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    // Nagivate to home page
                    history.push('/');
                }
            })
            .catch(err => alert(err.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button 
                        type="submit"
                        onClick={signIn}
                        className="login__signInButton">Sign In
                    </button>
                </form>
                <p>
                    By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and Privacy Notice.
                </p>

                <button 
                    onClick={register}
                    className="login__registerButton">Create your Amazon account
                </button>
            </div>
        </div>
    )
}

export default Login
