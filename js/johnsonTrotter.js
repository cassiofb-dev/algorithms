export default str => {
  const ARR = str.split('').map(x => x.charCodeAt(0)).sort((a,b) => a-b);
  
  if(ARR.length > 9) return 'Too many permutations!';

  // SET = [[value, direction]]
  const SET = ARR.map(x => [x,-1]), MAX = ARR.length;
  const PERMUTATIONS = [[...SET]];
  // As the set start as <1<2<3...<N the biggest is always the last
  let mobile = MAX - 1;

  const isMobile = idx => SET[idx+SET[idx][1]] && SET[idx][0] > SET[idx+SET[idx][1]][0];
  const setMobile = () => {
    for(let i = 0; i < MAX; i++) if(isMobile(i)) {
      if(isMobile(mobile)) {
        mobile = SET[mobile][0] > SET[i][0] ? mobile : i;
      } else {
        mobile = i;
      }
    }

    return isMobile(mobile);
  };

  const permutate = () => {
    let direction = SET[mobile][1];
    [SET[mobile], SET[mobile+direction]] = [SET[mobile+direction], SET[mobile]];
    mobile += direction;
    PERMUTATIONS.push([...SET]);
  }

  const reverse = () => {
    for(let i = 0; i < MAX; i++) if(SET[i][0] > SET[mobile][0]) SET[i][1] = -SET[i][1];
  };

  while(setMobile()) {
    permutate();
    reverse();
  }

  return PERMUTATIONS.map(x => x.map(y => String.fromCharCode(y[0])).join('')).join('-');
}
