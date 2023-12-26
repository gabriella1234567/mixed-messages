import adjectives from "./words/adjectives.js";
import adverbs from "./words/adverbs.js";
import nouns from "./words/nouns.js";
import verbs from "./words/verbs.js";

const generateSentence = () => {
  let randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  let randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
  let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  return `I want to ${randomAdverb} ${randomVerb} you, you ${randomAdj} ${randomNoun}`;
};

const generateVerb = () => {
  let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  return randomVerb;
};

const generateAdjective = () => {
  let randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  return randomAdj;
};

const generateNoun = () => {
  let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return randomNoun;
};

const generateAdverb = () => {
  let randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
  return randomAdverb;
};


export { generateVerb, generateAdjective, generateNoun, generateAdverb };
