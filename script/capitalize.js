const capitalize = (str) => {
  if (typeof str !== "string") {
    return "bru dat not word";
  }
  let firstLetter = str.charAt(0).toUpperCase();
  let restOfIt = str.slice(1).toLowerCase();
  return firstLetter + restOfIt;
};

export default capitalize;
