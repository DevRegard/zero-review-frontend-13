function solution(s, n) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'; // 기본 알파벳 문자열

  const shiftedAlphabets = alphabets.slice(n) + alphabets.slice(0, n); // n만큼 민 새로운 문자열

  let code = ''; //암호를 담을 빈 문자열 생성

  for (let i = 0; i < s.length; i++) {  // for문으로 문자열s의 각 문자에 접근
    const char = s[i];
    const index = alphabets.indexOf(char.toLowerCase()); // 접근한 문자의 기본 알파벳 인덱스를 찾음

    if (index === -1) {   // 문자열 s 안에 존재하지 않는 어떤 문자에 대한 처리( 따로 변환없이 바로 암호 문자열에 추가 )
      code += char;
      continue;
    }

    const shiftedChar = shiftedAlphabets[index]; // 기본 알파벳에서 찾은 s문자열의 인덱스를 통해 새로운 문자열에서 문자 찾기
     
    
   code += char === char.toLowerCase() ? shiftedChar : shiftedChar.toUpperCase(); // 원래 문자열이 소문자인지를 판별하여 true이면 소문자로, false이면 대문자로 반환

  return code;
}
