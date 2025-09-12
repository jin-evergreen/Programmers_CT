// 숫자의 표현(정답률 76%)

function solution(sn) {
  let answer = 0;

  for (let n = 1; n < sn + 1; n++) {
    const a = (2 * sn - n * (n - 1)) / (2 * n);
    if (Number.isInteger(a) && a > 0) answer++;
  }

  return answer;
}
