import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"


const experiences = data.map((item)=>{
  return (
    <Card
      key={item.id}
      {...item}
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
