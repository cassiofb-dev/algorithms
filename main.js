const ALGORITHMS = document.querySelector('#algorithms');
const INPUT = document.querySelector('#input');
const BENCH = document.querySelector('#bench');
const OUTPUT = document.querySelector('#output');

let algorithm = () => "No algorithm selected";

ALGORITHMS.onchange = async ({target: {value}}) => {
  algorithm = (await import(`./js/${value}.js`)).default;
};

INPUT.oninput = ({target: {value}}) => {
  const START = performance.now();
  OUTPUT.innerText  = value ? algorithm(value) : 'No Input';
  const TIME = (performance.now() - START).toPrecision(3);
  BENCH.innerText = `Output computed in ${TIME}ms.`;
};
