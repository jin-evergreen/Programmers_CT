// 내 답안
// H-index(정답률 67%)

function solution(citations) {
  var answer = 0;
  const max = Math.max(...citations); // 최대 인용 수 구하기

  for (let i = 1; i <= max; i++) {
    let up = 0; // h번보다 많이 인용
    let down = 0; // h번 보다 적게 인용
    for (let j = 0; j < citations.length; j++) {
      // 논문 별 인용 수에 따라 up, down 조정
      if (citations[j] >= i) up++;
      else down++;
    }
    if (up >= i && down <= i) answer = i; // 조건에 맞으면 H-index로 설정
  }

  return answer;
}
