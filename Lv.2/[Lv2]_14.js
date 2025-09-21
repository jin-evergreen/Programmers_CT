// N개의 최소공배수 (정답률 71%)

function solution(arr) {
  // 최대공약수를 구하기 위한 유클리드 호제법------------------
  const calc_gcd = (a, b) => {
    if (b == 0) return a;
    return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
  };
  // ------------------------------------------
  let now = (arr[0] * arr[1]) / calc_gcd(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    now = (now * arr[i]) / calc_gcd(now, arr[i]);
  }

  return now;
}
