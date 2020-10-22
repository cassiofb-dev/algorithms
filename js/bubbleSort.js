export default str => {
  let input, output = [];

  // Verify if the input is an valid array
  try {
    input = JSON.parse(str);
    if(!Array.isArray(input)) return 'Enter with an array. Ex: [1,2,3]';
  } catch(error) {
    return 'Enter with an array. Ex: [1,2,3]';
  }

  // Bubble Sort
  for(let i = 0; i < input.length - 1; i++)
    for(let j = 0; j < input.length - i - 1; j++)
      if(input[j] > input[j+1]){
        [input[j] , input[j+1]] = [input[j+1] , input[j]];
        output.push([...input]);
      }

  let result = output.map((x,y) => `${y+1}: [${x}]\n`).join('');

  return result || 'Already sorted';
}
