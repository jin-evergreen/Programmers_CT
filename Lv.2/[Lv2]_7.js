// 다음 큰 숫자(정답률 75%)

function solution(n) {
  const binary_n = n.toString(2);
  let num = n + 1;
  let one_num = 0;

  for (const char of binary_n) if (char == "1") one_num++;

  while (true) {
    const binary = num.toString(2);
    let binary_one_num = 0;
    for (const char of binary) if (char == "1") binary_one_num++;

    if (one_num == binary_one_num) break;

    num++;
  }

  return num;
}
