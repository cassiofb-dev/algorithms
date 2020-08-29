export default str => {
  if(str.match(/[^0-9\.]/g)) return 'Enter only with numbers';
  
  const US_CHANGE = {
    'ONE-HUNDRED DOLLARS': 100,
    'TWENTY DOLLARS': 20,
    'TEN DOLLARS': 10,
    'FIVE DOLLARS': 5,
    'DOLLAR': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01,
  };

  const CHANGE = [];
  let value = parseFloat(str), count = 0;

  if(value > 10000000) return 'Enter a number between 0 and 1000000000';
  
  for(let e in US_CHANGE) {
    while(US_CHANGE[e] <= value) {
      value -= US_CHANGE[e];
      count++;
    }
    if(count > 0) CHANGE.push(`${e} TIMES ${count}`);
    count = 0;
  }

  return CHANGE.join(' | ');
}
