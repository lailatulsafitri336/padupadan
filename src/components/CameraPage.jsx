import React, { useRef, useEffect, useState } from 'react';
import Navbar from './Navbar';

const CameraPage = () => {
  const videoRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [videoTrack, setVideoTrack] = useState(null);

  useEffect(() => {
    let currentStream = null;

    const getMedia = async () => {
      try {
        const constraints = {
          video: {
            facingMode: 'environment',
            frameRate: { ideal: 30, max: 60 }
          }
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        currentStream = stream;
        setMediaStream(stream);

        const videoTracks = stream.getVideoTracks();
        if (videoTracks.length > 0) {
          setVideoTrack(videoTracks[0]);
        }

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    getMedia();

    return () => {
      if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const turnOffCamera = () => {
    if (videoTrack) {
      videoTrack.stop();
      setVideoTrack(null);
    }
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
      setMediaStream(null);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Camera Page</h1>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <video ref={videoRef} autoPlay style={{ maxWidth: '100%', maxHeight: 'calc(100vh - 100px)', disablePictureInPicture: true }} />
        <br />
        <button onClick={turnOffCamera}>Turn Off Camera</button>
      </div>
    </div>
  );
};

export default CameraPage;
