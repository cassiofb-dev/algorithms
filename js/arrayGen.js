export default str => {
  if(str.match(/[^0-9]/g)) return 'Enter only with numbers';
  const SIZE = parseInt(str), ARR = [];
  if(SIZE > 1000000) return 'Too much elements!';
  for(let idx = 0; idx < SIZE; idx++) ARR.push(Math.floor(Math.random() * SIZE));
  return `[${ARR.join(',')}]`;
}
