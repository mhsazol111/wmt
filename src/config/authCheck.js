import { AUTH_CHECK } from './endpoints';

const checkAuth = () => {
    let xToken = amzData.csrf;
    let token = localStorage.getItem('__hell_t');
    if( token ) {
        return fetch(AUTH_CHECK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': xToken },
            body: JSON.stringify({ token: token })
        })
        .then( res => res.json() )
        .then( res => {
            if( ! res.status ) {
                localStorage.removeItem('__hell_t');
                localStorage.removeItem('__visitor_');
            }
            return res.status;
        })
        .catch( res => {
            localStorage.removeItem('__hell_t');
            localStorage.removeItem('__visitor_');
            return false;
        });
    }
    return false;
}

export default checkAuth;