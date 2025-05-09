import './App.css';
import meImage from './assets/mzeelogo.png';
import bgVideo from "./assets/bgvid.mp4";
import "./App.css";

function App() {
  return (
    <div className="App">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="background-video"
    >
      <source src={bgVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  
    <div className="content-wrapper">
      <div className="profile">
      <img src={meImage} alt="M ZEE Logo" className="logo" />
        <h1>M ZEE PERFECT</h1>
        <p>Welcome to my official link page. Tap below to stream my latest tracks, follow me, and join the community.</p>
      </div>
  
      <div className="buttons">
        <a href="https://spotify.openinapp.co/thq7t " class="button"> 🟢 Stream on Spotify</a>
        <a href="https://www.youtube.com/@mzeeperfect" class="button"> 🔴 Watch on YouTube</a>
        <a href="https://insta.openinapp.co/20oyd" class="button"> 📸 Follow on Instagram</a>
        <a href="https://applemusic.openinapp.co/xg2rv" class="button"> 🍎 Listen on Apple Music</a>
        <a href="https://discord.gg/xJVWSFmjXy" class="button"> 💬 Join My Discord Server</a>
      </div>
    </div>
  </div>
  
  );
}

export default App;
