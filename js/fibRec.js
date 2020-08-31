export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';

  const MAX = parseInt(str), LIST = [];
  const fib = n => {
    if(n < 2) return 1;
    return fib(n-1)+fib(n-2);
  }

  if(MAX > 30) return 'Enter a number between 0 and 30';
  for(let i = 0; i < MAX; i++) LIST.push(fib(i));

  return LIST.join('-');
}
