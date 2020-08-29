export default str => str.split(' ').map(x => x.split('').sort().join('')).join(' ');
