// 내 풀이
// 괄호 회전하기(정답률 69%)

function solution(s) {
  let answer = 0;
  let stk = [];
  let top = -1;

  for (let i = 0; i < s.length; i++) {
    let arr = s.split("");
    for (let j = 0; j < i; j++) {
      arr.push(arr[0]);
      arr.splice(0, 1);
    }

    for (const ele of arr) {
      if (
        (ele == "]" && stk[top] == "[") ||
        (ele == "}" && stk[top] == "{") ||
        (ele == ")" && stk[top] == "(")
      ) {
        stk.pop();
        top--;
      } else {
        stk.push(ele);
        top++;
      }
    }
    if (stk.length == 0) answer++;
    stk = [];
    top = -1;
  }

  return answer;
}
