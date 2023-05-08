function solution(s, n) {
  let lower = [
      "a", "b", "c", "d", 
      "e", "f", "g", "h", 
      "i", "j", "k", "l", 
      "m", "n", "o", "p", 
      "q", "r", "s", "t", 
      "u", "v", "w", "x", 
      "y", "z"
  ];

  let decrypt = [...s];
  let encrypt = [];

  function isLower(value) {
    let firstValue = value.charCodeAt(0);
    return firstValue >= 97 && firstValue <= 122;
  }

  for (let i = 0; i < decrypt.length; i++) {
    if (decrypt[i] === " ") {
      encrypt.push(decrypt[i]);
    } else {
      if (isLower(decrypt[i])) {
        let idx = lower.indexOf(decrypt[i]) + n <  26 
        ? lower.indexOf(decrypt[i]) + n 
        : lower.indexOf(decrypt[i]) + n - 26;
        let encrypting = lower[idx];
        encrypt.push(encrypting);
      } else {
        let idx = lower.indexOf(decrypt[i].toLowerCase()) + n < 26 
        ? lower.indexOf(decrypt[i].toLowerCase()) + n 
        : lower.indexOf(decrypt[i].toLowerCase()) + n - 26;
        let encrypting = lower[idx];
        encrypt.push(encrypting.toUpperCase());
      }
    }
  }
  return encrypt.join("");
}
