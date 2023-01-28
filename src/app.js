/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#badExcuse").innerHTML = excuse();
  });
};

let who = [
  "My dog",
  "A horse",
  "An angyr driver",
  "Your grandma",
  "My mum",
  "My boyfriend",
  "My boyfriend",
  "My boyfriend"
];
let action = ["ate", "trampeled", "threw away", "peed on", "sat on"];
let what = [
  "my computer",
  "my homework",
  "your cake",
  "all the money",
  "your curry"
];
let when = [
  "this morning.",
  "yesterday.",
  "after you went to bed.",
  "at the last moment."
];

function excuse() {
  let randomwho = Math.floor(Math.random() * who.length);
  let randomaction = Math.floor(Math.random() * action.length);
  let randomwhat = Math.floor(Math.random() * what.length);
  let randomwhen = Math.floor(Math.random() * when.length);

  return (
    who[randomwho] +
    " " +
    action[randomaction] +
    " " +
    what[randomwhat] +
    " " +
    when[randomwhen]
  );
}
