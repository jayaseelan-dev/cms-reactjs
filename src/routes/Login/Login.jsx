import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../utils/AuthProvider';

export default function Login() {
    let auth = useAuth();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    let [isValidUser, setValidUser] = useState();
    let [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let emailId = formData.get('emailId');
        let password = formData.get('password');
        setIsSubmitted(true);

        auth.signin({emailId, password}, (isAuthenticated) => {
            // Send them back to the page they tried to visit when they were
            // redirected to the login page. Use { replace: true } so we don't create
            // another entry in the history stack for the login page.  This means that
            // when they get to the protected page and click the back button, they
            // won't end up back on the login page, which is also really nice for the
            // user experience.
            setValidUser(isAuthenticated);
            if (isAuthenticated) {
                if (from === '/') {
                    navigate('/company', { replace: true });
                } else {
                    navigate(from, { replace: true });
                }
            }
        });
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <p>Login</p>
                <input type='text' name='emailId' placeholder='Email ID'></input>
                <input type='password' name='password' placeholder='Password'></input>
                <button>Login</button>
                { isSubmitted && !isValidUser && <p>Invalid email/password!!!</p> }
            </form>
        </section>
    );
}
