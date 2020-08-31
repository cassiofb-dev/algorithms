export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';

  const MAX = parseInt(str), LIST = [];
  let a = 1, b = 1;

  while(a < MAX) {
    LIST.push(a,b);
    a += b;
    b += a;
  }

  return LIST.join('-');
}
