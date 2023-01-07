import React, { useEffect, useRef, useState } from 'react';
import './index.less';

export const Stream: React.FC = () => {
  // const [isSharing, setIsSharing] = useState(false);
  // const videoRef = useRef<HTMLVideoElement>(null);

  // const handleStartShareScreen = async () => {
  //   if (isSharing) {
  //     return;
  //   } else {
  //     setIsSharing(true);
  //     try {
  //       const constraints = {
  //         audio: false,
  //         video: true,
  //       };
  //       navigator.mediaDevices
  //         .getUserMedia(constraints)
  //         .then(stream => {
  //           {
  //             if (!videoRef.current) {
  //               return;
  //             }
  //             videoRef.current.srcObject = stream;
  //           }
  //         })
  //         .catch(error => {
  //           console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
  //         });
  //     } catch (e) {
  //       alert(e);
  //     }
  //   }
  // };

  return (
    // <div className="screen-stream">
    //   <video ref={videoRef} style={{ display: isSharing ? undefined : 'none' }} autoPlay playsInline />
    //   {!isSharing && <button onClick={handleStartShareScreen}>分享屏幕</button>}
    //   <a href="https://webrtc.github.io/samples/src/content/getusermedia/canvas/">A</a>
    // </div>
    null
  );
};
