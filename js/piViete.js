export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';

  const INTERATIONS = parseInt(str);
  let double_inversed_pi = 1;

  if(INTERATIONS > 100000) return 'Too many iterantions!';

  const VIETE = [Math.SQRT2];
  const viete = n => {
    if(n < VIETE.length) return VIETE[n];
    VIETE.push(Math.sqrt(2 + viete(n-1)));
    return VIETE[VIETE.length-1];
  }

  viete(INTERATIONS);
  for(let v of VIETE) double_inversed_pi *= v/2;

  return 2/double_inversed_pi;
}
