import bench      from './utils/bench.js';
import outputView from './utils/outputView.js';

export default str => {
  let time = bench.start();
  let result = str.split(' ').sort().join(' ');
  time = bench.end(time);

  return outputView(result, time);
}