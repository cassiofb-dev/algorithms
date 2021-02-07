export default (result, time) => {
  result = result.length > 3000 ? '...' + result.slice(-2997) : result;
  time   = Math.floor(time * 100) / 100;

  return {
    result,
    time,
  }
}
