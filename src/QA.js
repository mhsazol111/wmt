import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';

class QA extends Component {
  render() {
    return (
      <div className="amz-trailer-video-wrapper">
        <div className="amz-trailer-video" id="amz-video-player" style={{ position: 'relative', width: '800px', height: '500px' }}>
          <ReactPlayer url="https://www.youtube.com/watch?v=KOQPfaWHoAo" controls={true} />
        </div>
      </div>
    );
  }
}

export default QA;
