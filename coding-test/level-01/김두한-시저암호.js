const solution = (s, n) => {
  let answer = '';

  // s의 각 문자에 대해 암호화를 수행
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 공백인 경우 똑같이 공백을 저장하고 다음 반복문으로 이동
    if (char === ' ') {
      answer += ' ';
      continue;
    }

    const code = s.charCodeAt(i);
    let encryptedChar;

    // 대문자인 경우 암호화를 수행
    if (code >= 65 && code <= 90)
      encryptedChar = String.fromCharCode((code - 65 + n) % 26 + 65);
   
    // 소문자인 경우 암호화를 수행
    else if (code >= 97 && code <= 122)
      encryptedChar = String.fromCharCode((code - 97 + n) % 26 + 97);
   
    answer += encryptedChar;
  }

  return answer; // 암호화된 문자들 반환
}