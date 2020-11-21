export const GATE_OPEN = amzData.gate_open_time; // UTC time
// export const GATE_OPEN = new Date(Date.UTC(2020, 10, 19, 0, 30)).getTime(); // UTC time
// new Date(Date.UTC(2020, 8, 10, 8)).getTime(); // UTC time

export const gate_should_open = () => {
    let current_time = new Date().getTime();
    return GATE_OPEN < current_time;
}

export const VIDEO_START_TIME = amzData.movie_start;// new Date(amzData.movie_start).getTime(); // from backend
// export const VIDEO_START_TIME = new Date(Date.UTC(2020, 10, 19, 0, 30)).getTime(); // UTC time
// new Date(Date.UTC(2020, 8, 10, 8, 30)).getTime(); // UTC time

export const REDIRECT_AFTER = parseInt(VIDEO_START_TIME) + (parseInt(amzData.redirect_after) * 1000);

export const video_should_start = () => {
    let current_time = new Date().getTime();
    return VIDEO_START_TIME < current_time;
}

export const seekTime = () => {
    let current_time = new Date().getTime();
    return Math.floor((current_time - VIDEO_START_TIME) / 1000);
}

export const SECOND_OPEN_TIME = amzData.second_show_gate_open; // UTC time
// export const SECOND_OPEN_TIME = new Date(Date.UTC(2020, 10, 19, 3, 30)).getTime(); // UTC time
// new Date(Date.UTC(2020, 8, 11, 2)).getTime(); // UTC time

export const SECOND_SHOW_TIME = amzData.second_movie_start_time; // UTC time
// export const SECOND_SHOW_TIME = new Date(Date.UTC(2020, 10, 19, 3, 30)).getTime(); // UTC time
// new Date(Date.UTC(2020, 8, 11, 2, 30)).getTime(); // UTC time

export const REDIRECT_AFTER_2ND = parseInt(SECOND_SHOW_TIME) + (parseInt(amzData.redirect_after) * 1000);

export const is_second_show_start = () => {
    let current_time = new Date().getTime();
    return SECOND_SHOW_TIME < current_time;
}

export const started_second_show = (current_time) => {
    if( ! current_time ){
        current_time = new Date().getTime();
    }
    return (VIDEO_START_TIME < current_time) && (SECOND_SHOW_TIME < current_time);
}

export const seekTime2 = () => {
    let current_time = new Date().getTime();
    return Math.floor((current_time - SECOND_SHOW_TIME) / 1000);
}

export const GATE_CLOSE = amzData.gate_close; // UTC time
// export const GATE_CLOSE = new Date(Date.UTC(2020, 10, 19, 10)).getTime(); // UTC time
// new Date(Date.UTC(2020, 8, 11, 11)).getTime(); // UTC time

export const gate_should_close = () => {
    let current_time = new Date().getTime();
    return GATE_CLOSE <= current_time;
}