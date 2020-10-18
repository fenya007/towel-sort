
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if (!matrix) return [];
  for (let i = 0; i < matrix.length; i++){
  (i % 2 == 0) ? res.push(...matrix[i]) : res.push(...matrix[i].reverse());
  }
  return res
}
