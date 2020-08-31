export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';

  const INTERATIONS = parseInt(str);
  let quarter_pi = 0;

  if(INTERATIONS > 1000000) return 'Too many iterantions!';

  for(let i = 0; i < INTERATIONS; i++) quarter_pi += Math.pow(-1,i)/(2*i + 1);

  return quarter_pi*4;
}
