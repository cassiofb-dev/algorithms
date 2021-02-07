import bench      from './utils/bench.js';
import outputView from './utils/outputView.js';

export default str => {
  let input;

  // Verify if the input is an valid array
  try {
    input = JSON.parse(str);
    if(!Array.isArray(input)) return 'Enter with an array. Ex: [1,2,3]';
  } catch(error) {
    return 'Enter with an array. Ex: [1,2,3]';
  }

  const getMean = values => {
    let total = 0;
    for(let value of values) total += value;
    return total / values.length;
  }

  let time = bench.start();
  let result = getMean(input);
  time = bench.end(time);

  return outputView(result, time);
}