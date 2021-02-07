import bench      from './utils/bench.js';
import outputView from './utils/outputView.js';

export default str => {
  const ARR = str.split(''), PERMUTATIONS = [];

  if(ARR.length > 9) return 'Too many permutations!';

  const generate = (k, [...A]) => { // https://en.wikipedia.org/wiki/Heap%27s_algorithm#Details_of_the_algorithm
    if(k === 1) {
      PERMUTATIONS.push(A);
    } else {
      generate(k-1, A);
      for(let i = 0; i < k-1; i++) {
        if(k%2) {
          [A[i], A[k-1]] = [A[k-1], A[i]];
        } else {
          [A[0], A[k-1]] = [A[k-1], A[0]];
        }
        generate(k-1, A);
      }
    }
  };

  let time = bench.start();
  generate(ARR.length, ARR);
  time = bench.end(time);

  let result = PERMUTATIONS.map(x => x.join('')).join('-');
  
  return outputView(result, time);
}
