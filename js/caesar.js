import bench      from './utils/bench.js';
import outputView from './utils/outputView.js';

export default str => {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const ROT_NUMBER = !str.startsWith('!RoT') ? 13 : parseInt(str.slice(-2));
  const rot = num => (num + ROT_NUMBER)%26;

  let time   = bench.start();
  let result = str.toUpperCase().split('').map(x => {
    let index = ALPHABET.indexOf(x);
    if(index < 0) return x;
    return ALPHABET[rot(index)];
  }).join('');
  time = bench.end(time);

  return outputView(result, time);
}
