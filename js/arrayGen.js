import bench      from './utils/bench.js';
import outputView from './utils/outputView.js';

export default str => {
  if(str.match(/[^0-9]/g)) return 'Enter only with numbers';

  const SIZE = parseInt(str), ARR = [];

  if(SIZE > 1000000) return 'Too much elements!';

  let time = bench.start();
  for(let idx = 0; idx < SIZE; idx++) ARR.push(Math.floor(Math.random() * SIZE));
  time = bench.end(time);

  let result = `[${ARR.join(',')}]`;

  return outputView(result, time);
}
