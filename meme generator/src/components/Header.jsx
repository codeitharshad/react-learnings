import "../index.css";
import TrollFace from "/images/TrollFace.png";

export default function Header() {
  return (
    <nav className="header">
      <div className="header--left">
        <div>
          <img
            className="header--image"
            src={TrollFace}
            alt="troll-face-image"
          />
        </div>
        <div>
          <h1 className="header--title">Meme Generator</h1>
        </div>
      </div>
      <p className="header--text">React Course - Project 3</p>
    </nav>
  );
}
