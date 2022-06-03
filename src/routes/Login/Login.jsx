import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/AuthProvider';

export default function Login() {
    let auth = useAuth();
    let navigate = useNavigate();
    let location = useLocation();
    
    let from = location.state?.from?.pathname || '/';

    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let emailId = formData.get('emailId');
        let password = formData.get('password');

        auth.signin({emailId, password}, () => {
            // Send them back to the page they tried to visit when they were
            // redirected to the login page. Use { replace: true } so we don't create
            // another entry in the history stack for the login page.  This means that
            // when they get to the protected page and click the back button, they
            // won't end up back on the login page, which is also really nice for the
            // user experience.
            if (from === '/') {
                navigate('/company', { replace: true });
            } else {
                navigate(from, { replace: true });
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
            </form>
        </section>
    );
}
