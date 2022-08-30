const analyzeArray = (arr) => {
  const average = arr.reduce((sum, curr) => sum + curr, 0) / arr.length;
  const min = arr.sort((a, b) => a - b)[0];
  const max = arr.sort((a, b) => a - b)[arr.length - 1];
  const length = arr.length;
  return { average, min, max, length };
};

export default analyzeArray;
