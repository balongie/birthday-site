import { useState } from "react";
import "./App.css";

function App() {
  const [surprise, setSurprise] = useState(false);
  const base = "https://balongie.github.io/birthday-site/";

  return (
    <main className="page">
      <div className="card">
        <div className="heart">💗</div>

        <h1>
          Happy Birthday,
          <span> bebe Shaira</span>
        </h1>

        <p className="subtitle">Today is all about you ✨</p>

        <img src={`${base}Photo2.jpg`} alt="Her photo" className="photo" />

        <p className="message">
          Happy birthday to the most beautiful person in my life. Thank you for
          being my happiness, my comfort, and my favorite person.
        </p>

        <p className="message">
          I hope today makes you feel as loved and special as you truly are. I
          love you so much.
        </p>

        <button onClick={() => setSurprise(true)}>Tap for surprise 🎁</button>

        {surprise && (
          <div className="surprise">
            <img src={`${base}flower.png`} alt="Flower" className="flower-pop" />
            You are my favorite person. Happy birthday, baby 💖
          </div>
        )}

        <p className="footer">Made with love, just for you.</p>
      </div>

      {surprise && (
        <div className="heart-image-rain">
          {Array.from({ length: 35 }).map((_, i) => (
            <img
              key={i}
              src={`${base}hearts.png`}
              alt=""
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;