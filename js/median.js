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

  const getMedian = values => {
    let middle = parseInt(values.length / 2);
    values.sort((a,b) => a - b);
    if(values.length % 2) return values[middle];
    return (values[middle - 1] + values[middle]) / 2;
  }

  let time = bench.start();
  let result = getMedian(input);
  time = bench.end(time);

  return outputView(result, time);
}