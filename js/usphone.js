export default str => {
  if(str.match(/[^0-9\s-\(\)]/g)) return false;

  const SPLIT_REGEX = /[\(\)\s-]+/g;

  if(str.includes('(') ^ str.includes(')')) return false;

  const NUMBER = str.split(SPLIT_REGEX).join('');
  
  switch(NUMBER.length) {
    case 10:
      return !str.endsWith(')');
    case 11:
      return str.startsWith('1');
    default:
      return false;
  }
}
