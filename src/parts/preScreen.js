import React from 'react';
import Countdown from './countDown';

export default class PreScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="amz-video-wrapper fade-in">
                <div className="prescreen-countdown-wrap" style={{ position: 'absolute', zIndex: 99, width: '100%', top: 0}}>
                    <h5 className="prescreen-countdown text-center">{amzData.prescreen_timer_label} <br/>in <Countdown placeShown={`pre-screen`} timeTillDate={ this.props.endTime } timeFormat='YYYY-MM-DD H:m:s' style={{ display: 'inline-block' }} onFinished={this.props.onFinished} /> min</h5>
                </div>
                <div className="amz-video" style={{ position: 'relative', width: '800px', height: '500px' }}>
                    <img src={amzData.theme_url + '/assets/images/prescreen-img.jpg'} />
                </div>
            </div>
        )
    }
}