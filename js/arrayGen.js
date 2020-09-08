export default str => {
  if(str.match(/[^0-9]/g)) return 'Enter only with numbers';
  const ARR = new Array(parseInt(str));
  return ARR.map(x => Math.floor(Math.random() * ARR.length));
}
