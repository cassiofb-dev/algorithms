import bench      from './utils/bench.js';
import outputView from './utils/outputView.js';

export default str => {
  const TARGET = str.match(/[0-9a-zA-Z]/g);

  let time = bench.start();
  let isPalindrome = TARGET.join('') === TARGET.reverse().join('');
  time = bench.end(time);

  let result = isPalindrome ? 'Palindrome' : 'Not palindrome';

  return outputView(result, time);
};
