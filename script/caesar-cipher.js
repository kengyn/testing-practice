let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function caesarCipher(str, num) {
  let strArr = [...str];
  let ciphered = [];
  for (let letter of strArr) {
    if (!!letter.match(/^[.,:!?]/) || letter === " ") {
      ciphered.push(letter);
    } else {
      let cipherLetter = (alphabet.indexOf(letter) + num) % 26;
      ciphered.push(alphabet[cipherLetter]);
    }
  }
  return ciphered.join("");
}

export default caesarCipher;
