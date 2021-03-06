import bench      from './utils/bench.js';
import outputView from './utils/outputView.js';

export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';

  const LIST = [], MAX = parseInt(str);

  if(MAX > 20000) return 'Enter a number between 0 and 20000';

  let divisors = 0;

  let time = bench.start();
  for(let i = 1; i <= MAX; i++) {
    for(let j = 1; j <= i; j++) if(i%j === 0) divisors ++;
    if(divisors === 2) LIST.push(i);
    divisors = 0;
  }
  time = bench.end(time);

  let result = LIST.join('-');

  return outputView(result, time);
}
