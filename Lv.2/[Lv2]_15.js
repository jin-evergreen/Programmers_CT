// 내 답안
// 멀리뛰기(정답률 71%)

function solution(n) {
  let answer = 0n;
  let a = 0;

  while (n >= 2 * a) {
    const two_step = a;
    const one_step = n - 2 * a;

    let n_f = 1n;
    let one_step_f = 1n;
    let two_step_f = 1n;

    for (let i = one_step + two_step; i > 1; i--) n_f *= BigInt(i);
    for (let i = one_step; i > 1; i--) one_step_f *= BigInt(i);
    for (let i = two_step; i > 1; i--) two_step_f *= BigInt(i);

    answer += n_f / (one_step_f * two_step_f);

    a++;
  }

  return answer % 1234567n;
}
