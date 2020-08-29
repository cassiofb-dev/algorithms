export default str => {
  const TARGET = str.match(/[0-9a-zA-Z]/g);
  return TARGET.join('') === TARGET.reverse().join('');
};
