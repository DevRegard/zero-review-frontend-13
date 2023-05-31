const solution = food => {
  // 음식을 반으로 나누기 위한 변수 생성 
  let left = "", right = "";

  for(let i = 1; i < food.length; i++) {
      // 음식을 반으로 나누고 harf에 저장 
      let half = Math.floor(food[i] / 2);

      // 음식의 개수를 2로 나누고 사용하지 않을 음식 `drop`에 저장 
      let drop = food[i] % 2;
      
      // food 배열에서 사용하지 않을 음식(drop)을 제거
      food[i] -= half * 2 + drop;

      // `half` 개수만큼 선수가 먹을 음식(left, right)에 추가 
      for(let j = 0; j < half; j++) { 
          left += i.toString();         // 음식을 왼쪽부터 배치 
          right = i.toString() + right; // 음식을 오른쪽부터 배치 
      }
  }

  // 양 선수가 먹을 음식 순서 사이에 물(0) 배치 후 반환 
  return left + "0" + right; 
}