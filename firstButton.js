import { generateVerb, generateAdjective, generateNoun, generateAdverb } from "./generateWords.js";


const firstButtonEvent = () => {
    const firstButton = document.getElementById("firstButton");
    const firstInsult = document.getElementById("firstInsult");

  firstButton.addEventListener("click", () => {
    firstInsult.innerHTML = `I want to ${generateAdverb()} ${generateVerb()} you, you ${generateAdjective()} ${generateNoun()}`;
  });
};

firstButtonEvent();
