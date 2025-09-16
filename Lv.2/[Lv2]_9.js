// 피보나치 수(정답률 74%)

function solution(n) {
  if (n <= 1) {
    return BigInt(n);
  }

  let a = 0n;
  let b = 1n;

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b & 1234567n;
}
