import { TRACKING } from "../config/endpoints";

export const TRACK_INTERVAL = 180000; // 3 mins 

// Get Login token
export const get_login_token = () => {
    let token = localStorage.getItem('__hell_t');
    return token || false;
}

// Get visitor token
export const get_visitor_token = () => {
    let token = localStorage.getItem('__visitor_');
    return token || false;
}

// start tracking
export const start_tracking = (start_time, currentPage) => {
    let xToken = amzData.csrf;
    let visitor_token = get_visitor_token();
    let login_token = get_login_token();
    let isGallery = 'gallery' == currentPage ? 'yes' : 'no';
    let last_time = new Date().getTime();

    if( xToken && visitor_token && login_token ){
        return fetch(TRACKING, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': xToken },
            body: JSON.stringify({ 
                token: login_token,
                session_id: visitor_token,
                gallery: isGallery,
                path: currentPage,
                start: start_time,
                last: last_time
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              // console.log(res);
            })
            .catch((res) => {
              // Errors
              console.log('Errors happend!');
            });
    }
}
