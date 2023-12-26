import { generateVerb, generateAdjective, generateNoun, generateAdverb } from "./generateWords.js";


const secondButtonEvent = () => {
    const secondButton = document.getElementById("secondButton");
    const secondInsult = document.getElementById("secondInsult");

  secondButton.addEventListener("click", () => {
    secondInsult.innerHTML = `Well, at least I'm not a ${generateAdjective()} ${generateNoun()} that can't even ${generateVerb()} ${generateAdverb()}`;
  });
};

console.log(secondButtonEvent)

secondButtonEvent();
