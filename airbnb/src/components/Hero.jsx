import '../index.css'
import photo from '../assets/grid-images.png'

export default function Hero(){
    return (
      <section className="hero">
        <img src={photo} alt="photo-grid" className="hero--photo" />
        <h1 className="hero--heading">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    );
} 