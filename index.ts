// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript s</h1>`;

const adder = (a : string | number, b: string | number) => {
  return a + b
};
