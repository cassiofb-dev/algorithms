export default str => {
  const ARR = str.split('').map(x => x.charCodeAt(0)).sort((a,b) => a-b);
  const MAX = ARR.length, DIR = new Array(MAX).fill(true), PERMUTATIONS = [];
  let mobile, largest = ARR.reduce((a,x) => x > a ? x : a);

  //Not finished
}
