// Import stylesheets
import './style.css';

// Write TypeScript code!
const body: HTMLElement = document.querySelector("#app")

const combineAdd = (a: string | number, b: string | number) => {
  let result;
  if (typeof a === 'number' || typeof b === 'number') {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }
  return result;
};



body.innerHTML= `<h2>${combineAdd("Mary", "Had")}</h2>`