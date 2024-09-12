import { useState } from "react";
import "./App.css";

function App() {
  const [ticket, setTicket] = useState("");
  const [result, setResult] = useState("");

  const getRandomNumber = () => {
    let randomNumber = "";
    for (let i = 0; i <= 2; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
    setTicket("Ticket Number is: " + randomNumber);

    let sum = 0;
    for (let i = 0; i <= 2; i++) {
      sum += parseInt(randomNumber[i]);
    }
    console.log(sum);

    setResult(sum === 15 ? "You Won the Lottery" : "Let's Try Again");
  };

  return (
    <>
      <h1>Lottery</h1>
      <h2
        style={
          result === "You Won the Lottery"
            ? { color: "green" }
            : { color: "red" }
        }
      >
        {result}
      </h2>

      <p>{ticket}</p>
      <div className="card">
        <button onClick={getRandomNumber}> Get a Ticket </button>
      </div>
    </>
  );
}

export default App;
