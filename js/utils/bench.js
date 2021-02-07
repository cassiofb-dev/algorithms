export default {
  start: ()  => performance.now(),
  end: start => performance.now() - start,
}