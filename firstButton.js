import generateSentence from "./sentenceGen.js";


const firstButtonEvent = () => {
    const firstButton = document.getElementById("firstButton");
    const insultText = document.getElementById("insult");
    
  firstButton.addEventListener("click", () => {
    insultText.innerHTML = generateSentence();
  });
};

firstButtonEvent();
