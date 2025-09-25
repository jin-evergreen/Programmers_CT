// 내 답안
// 할인 행사(정답률 69%)

function solution(want, number, discount) {
  let arr = [];
  let answer = 0;

  outer: for (let i = 0; i <= discount.length - 9; i++) {
    const obj = {};
    arr = discount.slice(i, i + 10);
    for (const ele of arr) {
      obj[ele] == undefined ? (obj[ele] = 1) : (obj[ele] += 1);
    }
    for (let j = 0; j < want.length; j++) {
      if (obj[want[j]] != number[j]) continue outer;
    }
    answer++;
  }

  return answer;
}
