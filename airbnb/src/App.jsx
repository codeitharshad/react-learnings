import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"


const experiences = data.map((item)=>{
  return (
    <Card
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country=  {item.location}
      title={item.title}
      price={item.price}
    />
  );
})

function App() {
  return (
    <div className="main-div">
      <Navbar />
      <Hero />

      <section className="card--div"> 
        {experiences}
      </section>
      
    </div>
  );
}

export default App;
