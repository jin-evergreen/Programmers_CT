// 귤 고르기(정답률 71%)

function solution(k, tangerine) {
  let answer = 0;
  const count = {};

  // 객체에 각 크기별 개수 저장
  for (const tgr of tangerine) {
    if (count[tgr] == undefined) count[tgr] = 1;
    else count[tgr] += 1;
  }

  // Object.entries 활용 개수 기준 내림차순 정렬
  const count_arr = Object.entries(count).sort((a, b) => b[1] - a[1]);

  // 개수가 많은 크기부터 소모하면서 k 채우기 (k 이상이면 break)
  let a = 0;
  for (const ele of count_arr) {
    a += ele[1];
    answer++;

    if (a >= k) break;
  }

  return answer;
}
