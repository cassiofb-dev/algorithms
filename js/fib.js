import bench      from './utils/bench.js';
import outputView from './utils/outputView.js';

export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';

  const MAX = parseInt(str), LIST = [];
  let a = 1, b = 1;

  let time = bench.start();
  while(b < MAX) {
    LIST.push(a,b);
    a += b;
    b += a;
  }
  time = bench.end(time);

  let result = LIST.join('-');

  return outputView(result, time);
}
