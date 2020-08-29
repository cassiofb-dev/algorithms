const ALGORITHMS = document.querySelector('#algorithms');
const INPUT = document.querySelector('#input');
const OUTPUT = document.querySelector('#output');

let algorithm = () => "No algorithm selected";

ALGORITHMS.onchange = async ({target: {value}}) => {
  algorithm = (await import(`./js/${value}.js`)).default;
};

INPUT.oninput = ({target: {value}}) => {
  OUTPUT.innerText  = value ? algorithm(value) : 'No Input';
};
