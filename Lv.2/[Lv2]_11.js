// 점프와 순간이동(정답률 71%)

function solution(n) {
  let num = n;
  let jump = 0;

  while (num != 0) {
    if (num % 2 == 0) num = num / 2;
    else {
      num -= 1;
      jump++;
    }
  }

  return jump;
}
