// 카펫 (정답률 73%)

function solution(brown, yellow) {
  const w_plus_l = (brown - 4) / 2;
  let answer = [];

  for (let i = 1; i <= yellow; i++) {
    const a = yellow / i;

    if (w_plus_l == a + i) {
      answer.push(i);
      answer.push(a);
      break;
    }
  }

  answer.map((val, idx) => (answer[idx] = val + 2));
  return answer.sort((a, b) => b - a);
}
