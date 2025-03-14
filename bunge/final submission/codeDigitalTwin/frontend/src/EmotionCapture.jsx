import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const EmotionCapture = ({ sendEmotion }) => {
  const [emotion, setEmotion] = useState('Detecting...');
  const webcamRef = useRef(null);

  const captureAndSendImage = async () => {
    const imageSrc = webcamRef.current.getScreenshot();  // Capture image from cam
    sendEmotion(imageSrc);  // pass captured image to parent component
  };

  // Set pace of image capture
  React.useEffect(() => {
    const interval = setInterval(() => {
      captureAndSendImage();
    }, 100);  // 10 FPS

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Real-Time Emotion Recognition</h1>
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        width="100%"
        videoConstraints={{
          facingMode: 'user',
        }}
        ref={webcamRef}
      />
    </div>
  );
};

export default EmotionCapture;
