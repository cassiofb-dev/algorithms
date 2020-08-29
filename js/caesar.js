export default str => {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const ROT_NUMBER = !str.startsWith('!RoT') ? 13 : parseInt(str.slice(-2));
  const ROT = num => (num + ROT_NUMBER)%26;

  return str.toUpperCase().split('').map(x => {
    const IDX = ALPHABET.indexOf(x);
    if(IDX < 0) return x;
    return ALPHABET[ROT(IDX)];
  }).join('');
}
