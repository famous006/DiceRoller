import React, { useState } from "react";

export default function DiceRoller() {
    const [dice, setDice] = useState(null);

    const rollDice = () => {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        setDice(randomNum);
    };

    return (
        <div className="text-center mt-10">
            <h1 className="text-2xl font-bold mb-5">🎲 Dice Roller</h1>
            <button
                onClick={rollDice}
                className="bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800"
            >
                Roll Dice
            </button>
            <p className="text-3xl mt-5">
                {dice ? `You rolled: ${dice}` : "Click the button to roll!"}
            </p>
        </div>
    );
}