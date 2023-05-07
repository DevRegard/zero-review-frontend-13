function solution(s, n) {
  var answer = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; // (1) 알파벳 문자열이 있는 변수 선언
  const strArr = s.split(""); // (2) 매개변수로 받은 s 문자열 배열로 변환

  // (3) 배열 strArr 반복문으로 돌면서 요소들 n만큼 증가시킨 알파벳으로 변환
  for (let i = 0; i < strArr.length; i++) {
    // (4) alphabet를 기준으로 strArr[i]의 인덱스 번호 추출
    let index = alphabet.indexOf(strArr[i].toLowerCase());

    // (5) 조건에 따라 분기처리
    if (index != -1) {
      index = index + n > 25 ? index + n - 26 : index + n;
      answer +=
        strArr[i].toLowerCase() === strArr[i]
          ? alphabet[index]
          : alphabet[index].toUpperCase();
    } else {
      answer += strArr[i];
    }
  }

  return answer;
}
