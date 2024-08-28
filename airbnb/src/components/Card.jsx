import "../index.css";
import star from "../assets/star.png";

export default function (props) {
  
  let badgeText;

  if(props.openSpots === 0){
    badgeText = "SOLD OUT";
  }else if(props.location ==="online"){
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.coverImg} className="card--image" alt="Image" />

      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />

        <span className="card--rating">{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray"> {props.location}</span>
      </div>

      <h2 className="card--tagline">{props.title}</h2>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
