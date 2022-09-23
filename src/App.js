import "./App.css";
import { useState } from "react";
import Confetti from "react-confetti";

export default function App() {
  const { width, height } = [window.outerWidth, window.outerHeight];
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [isLucky, setIsLucky] = useState(false);

  const checkResult = () => {
    if (date !== "" && number !== "") {
      let sum = 0;
      let userInput = date.replaceAll("-", "");
      for (let val of userInput) {
        sum += Number(val);
      }
      let rem = sum % number;
      if (rem === 0) {
        setIsLucky(true);

        setResult("Congrats, you have a lucky birthday 🎉");
        setTimeout(() => {
          setIsLucky(false);
        }, 3000);
      } else {
        setResult(`${number} is not that Lucky.. 😿`);
      }
    } else if (date == "") {
      setResult("Please enter date");
    } else if (number == "") {
      setResult("Please enter a number");
    }
  };
  return (
    <div className="App">
      <Confetti
        gravity={0.4}
        run={isLucky}
        numberOfPieces={400}
        height={height}
        width={isLucky ? width : 0}
      />
      <div className="container">
        <h1 className="heading">Is Your Birthday Lucky? 🤔</h1>
        <label htmlFor="dob">Date Of Birth:</label>
        <input
          id="dob"
          type="date"
          onChange={(e) => {
            setResult("");
            setDate(e.target.value);
          }}
        />
        <label htmlFor="lucky-number">Lucky Number:</label>
        <input
          id="lucky-number"
          type="number"
          placeholder="Enter your lucky number"
          onChange={(e) => {
            setResult("");
            setNumber(e.target.value);
          }}
        />
        <button onClick={checkResult}>Check Result</button>
        <h2 className="result">{result}</h2>
      </div>
    </div>
  );
}
