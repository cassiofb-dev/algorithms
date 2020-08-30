export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';

  const SIZE = parseInt(str) + 1, LIST = [];
  const PRIME = new Array(SIZE).fill(true), MAX = Math.sqrt(SIZE);

  let i, j;
  for(i = 2; i < MAX; i++) {
    if(PRIME[i]) for(j = i*i; j < SIZE; j += i) PRIME[j] = false;
  }

  for(i = 2; i < SIZE; i++) if(PRIME[i]) LIST.push(i);

  return LIST.join('-');
}
