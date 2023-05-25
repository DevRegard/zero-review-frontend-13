function solution(food) {
  let order = [];
  for (let i = 1; i < food.length; i++) {
    if (food[i] < 2) continue;
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      order.push(i);
    }
  }
  let playerA = order.join("");
  let playerB = order.reverse().join("");
  return [...playerA, 0, ...playerB].join("");
}
