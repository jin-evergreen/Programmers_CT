// 예상 대진표(정답률 70%)

function solution(N, A, B) {
  let [a, b] = A < B ? [A, B] : [B, A];
  let answer = 1;

  while (true) {
    if (a + 1 == b && a % 2 != 0) break; // a가 홀수여야 하는 이유 - a와 b가 2,3인 경우 break에 걸림
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
