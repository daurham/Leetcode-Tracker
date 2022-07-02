
export const range = (s = 0, e = 10, st = 1) => {
  if (e % st !== 0) return null;
  let result = [];
  // console.log(s, e, st, result)
  if (s === e) return [e];
  if (s < e) result = [s, ...range(s + st, e, st), ...result];
  if (s > e) result = [s, ...range(s - st, e, st), ...result];
  return result;
};