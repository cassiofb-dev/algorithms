import bench      from './utils/bench.js';
import outputView from './utils/outputView.js';

export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';

  const MAX = parseInt(str)-1, LIST = [1,1];

  if(MAX > 1500) return 'Limit reached';
  const fib = n => {
    if(LIST[n]) return LIST[n];
    LIST[n] = fib(n-1) + fib(n-2);
    return LIST[n];
  }

  LIST.push(...new Array(MAX-2).fill(0));

  let time = bench.start();
  fib(MAX);
  time = bench.end(time);

  let result = LIST.join('-');

  return outputView(result, time);
}
