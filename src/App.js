import React from "react";
import Die from "./Components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dices, setDices] = React.useState(allNewDice());

  function allNewDice() {
    const arrayDice = [];
    for (let i = 0; i < 10; i++) {
      arrayDice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }
    return arrayDice;
  }

  function rollTheDice() {
    setDices(allNewDice());
  }

  function holdDice(id) {
    console.log(id);
  }

  const dieElements = dices.map((die) => (
    <Die
      value={die.value}
      isHeld={die.isHeld}
      key={die.id}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      <div className="die--container">{dieElements}</div>
      <button onClick={rollTheDice} className="roll--dice">
        Roll the dices!
      </button>
    </main>
  );
}
