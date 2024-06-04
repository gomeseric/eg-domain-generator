/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronous = ["the", "my", "our"];
let adjs = ["amazing", "sad", "beautiful"];
let nouns = ["city", "dog", "house"];

const domains = [];

for (const p of pronouns) {
  for (const a of adjs) {
    for (const n of nouns) {
      const d = p + a + n + ".com";
      domains.push(d);
    }
  }
}
