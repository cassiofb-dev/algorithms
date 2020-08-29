export default str => {
  if(str.match(/[^0-9IVXLCDM]/g)) return 'Enter only with numbers and L, V, X, C, D, M';

  // if (roman -> int) else (int -> roman)
  if(str.match(/[^0-9]/g)){

    const ROMAN_NUM = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
    let answer = 0;

    for(let i = 0; i < str.length; i++) {
      answer += ROMAN_NUM[str[i]];
      if(i > 0 && ROMAN_NUM[str[i]] > ROMAN_NUM[str[i-1]]) answer -= 2*ROMAN_NUM[str[i-1]];
    }

    return answer;

  }else {

    let value = parseInt(str);
    
    if(value >= 4000) return 'Enter a number between 0 and 4000';

    const ANSWER = [] , BASIC = {
      '1': 'I',
      '4': 'IV',
      '5': 'V',
      '9': 'IX',
      '10': 'X',
      '40': 'XL',
      '50': 'L',
      '90': 'XC',
      '100': 'C',
      '400': 'CD',
      '500': 'D',
      '900': 'CM',
      '1000': 'M',
    };

    const NUMBERS = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

    for(let number of NUMBERS) {
      while(number <= value) {
        value -= number;
        ANSWER.push(BASIC[`${number}`]);
      }
    }

    return ANSWER.join('');
  }
}
