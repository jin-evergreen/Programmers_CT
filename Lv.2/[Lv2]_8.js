// 짝지어 제거히기(정답률 75%)

function solution(s) {
  let answer = -1;
  const stk = [];
  let top = -1;

  for (const char of s) {
    if (char == stk[top]) {
      stk.pop();
      top--;
    } else {
      stk.push(char);
      top++;
    }

    if (stk.top == 3) break;
  }

  stk.length == 0 ? (answer = 1) : (answer = 0);

  return answer;
}
