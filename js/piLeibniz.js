import bench      from './utils/bench.js';
import outputView from './utils/outputView.js';

export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';

  const INTERATIONS = parseInt(str);
  let quarter_pi = 0;

  if(INTERATIONS > 1000000) return 'Too many iterantions!';

  let time = bench.start();
  for(let i = 0; i < INTERATIONS; i++) quarter_pi += Math.pow(-1,i)/(2*i + 1);
  time = bench.end(time);

  let result = quarter_pi * 4;

  return outputView(result, time);
}
