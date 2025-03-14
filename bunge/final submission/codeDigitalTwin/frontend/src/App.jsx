import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import AvatarViewer from "./Avatar";
import "./index.css";
import images from "./ImageArray";

const App = () => {
  const [emotion, setEmotion] = useState("happy");
  const webcamRef = useRef(null);
  const avatarURL =
    "https://models.readyplayer.me/67c73d86bf28c8a21e42e31a.glb?bodyType=halfbody";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const captureAndSendImage = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    try {
      const response = await axios.post("http://localhost:3000/emotion", {
        image: imageSrc,
      });
      if (response.data.emotion) {
        setEmotion(response.data.emotion);
      }
    } catch (error) {
      console.error("Error: sending image to backend", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(captureAndSendImage, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="app-container">
      <div className="webcam-container">
        <Webcam ref={webcamRef} />
        <h3>Emotion: {emotion}</h3>
      </div>
      <div className="avatar">
        <AvatarViewer avatarUrl={avatarURL} currentEmotion={emotion} />
      </div>
      <div className="test-container">
        <h1 className="test-title">Can You Mirror This Emotion?</h1>
        <img src={images[currentImageIndex]} className="test-image" />
        <button className="next-button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
