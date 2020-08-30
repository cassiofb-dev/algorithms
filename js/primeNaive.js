export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';

  const LIST = [], MAX = parseInt(str);

  let divisors = 0;
  for(let i = 1; i <= MAX; i++) {
    for(let j = 1; j <= i; j++) if(i%j === 0) divisors ++;
    if(divisors === 2) LIST.push(i);
    divisors = 0;
  }

  return LIST.join('-');
}
