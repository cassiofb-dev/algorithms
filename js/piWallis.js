import bench      from './utils/bench.js';
import outputView from './utils/outputView.js';

export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';

  const INTERATIONS = parseInt(str);
  let half_pi = 1;

  if(INTERATIONS > 1000000) return 'Too many iterantions!';

  let time = bench.start();
  for(let i = 1; i < INTERATIONS; i++) half_pi *= 4*i*i/(4*i*i-1);
  time = bench.end(time);

  let result = half_pi * 2;

  return outputView(result, time);
}
