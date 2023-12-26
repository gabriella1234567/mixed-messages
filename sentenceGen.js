const adjectives = require("./words/adjectives");
const adverbs = require("./words/adverbs");
const nouns = require("./words/nouns");
const verbs = require("./words/verbs");

const generateSentence = () => {
  let randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  let randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
  let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  return `I want to ${randomAdverb} ${randomVerb} you, you ${randomAdj} ${randomNoun}`;
};

console.log(generateSentence());
