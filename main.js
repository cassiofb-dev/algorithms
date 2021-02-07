const ALGORITHMS = document.getElementById('algorithms');
const INPUT      = document.getElementById('input');
const BENCH      = document.getElementById('bench');
const OUTPUT     = document.getElementById('output');

let algorithm;

ALGORITHMS.onchange = async ({target: {value}}) => {
  algorithm = (await import(`./js/${value}.js`)).default;
};

INPUT.oninput = ({target: {value}}) => {
  if(!algorithm) return OUTPUT.innerText = 'No Algorithm selected';
  if(!value)     return OUTPUT.innerText = 'No Input';

  const RESULT = algorithm(value);

  if(typeof(RESULT) === 'string') return OUTPUT.innerText = RESULT;

  BENCH.innerText  = `Computed in ${RESULT.time}ms`;
  OUTPUT.innerText = RESULT.result;
};
