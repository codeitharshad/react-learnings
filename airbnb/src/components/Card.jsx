import '../index.css'
import star from '../assets/star.png'



export default function({img, rating, reviewCount, country, title, price}){
    return (
      <div className="card">
        <img src={img} className="card--image" alt="Image" />

        <div className="card--stats">
          <img src={star} alt="star" className="card--star" />

          <span className="card--rating">{rating}</span>
          <span className="gray">({reviewCount}) • </span>
          <span className="gray"> {country}</span>
        </div>

        <h2 className="card--tagline">{title}</h2>
        <p>
          <span className="bold">From ${price}</span> / person
        </p>
      </div>
    );
}