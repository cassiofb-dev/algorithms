const ALGORITHMS = document.querySelector('#algorithms');
const INPUT = document.querySelector('#input');
const BENCH = document.querySelector('#bench');
const OUTPUT = document.querySelector('#output');

let algorithm;

ALGORITHMS.onchange = async ({target: {value}}) => {
  algorithm = (await import(`./js/${value}.js`)).default;
};

INPUT.oninput = ({target: {value}}) => {
  if(!algorithm) return OUTPUT.innerText = 'No Algorithm selected';
  if(!value) return OUTPUT.innerText = 'No input';

  const START = performance.now();
  const RESULT  = algorithm(value);
  const TIME = Math.floor((performance.now() - START)*100)/100;

  BENCH.innerText = `Output computed in ${TIME}ms.`;
  OUTPUT.innerText = RESULT.length > 3000 ? '...' + RESULT.slice(-2997) : RESULT;
};
