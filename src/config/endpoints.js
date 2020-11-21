// const remote = 'https://sylvieslovefilm.com';
const remote = window.location.origin + '/wp-json';
const rootUrl = remote + '/amz';

//
//Authentication
export const AUTH_URL = rootUrl + '/auth'; // post request
export const AUTH_CHECK = rootUrl + '/auth-check';

// Tracking
const trackRoot = remote + '/iexperto';
export const TRACKING = trackRoot + '/tracking';