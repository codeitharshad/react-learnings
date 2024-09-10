import '../index.css'
import memesData from '../memesData';
import {useState} from 'react'

export default function Meme() {

  const [memeImage, setMemeImage] = useState("https://i.imgflip.com/3si4.jpg");

  function getMemeImage(){
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random()* memesArray.length);
    setMemeImage(memesArray[randomNum].url);
  }

  return (
    <main>

      <div className="form">

        <div>
          <label htmlFor="top-text">Top Text</label>
          <input
            id="top-text"
            className="form--input"
            type="text"
            placeholder="Shut up"
          />
        </div>

        <div>
          <label htmlFor="bottom-text">Bottom Text</label>
          <input
            id="bottom-text"
            className="form--input"
            type="text"
            placeholder="And take my money"
          />
        </div>

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>

      </div>

      <img src={memeImage} alt='img' className="meme--image" />

    </main>
  );
}