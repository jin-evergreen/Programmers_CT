// 내 답안
// 연속 부분 수열 합의 개수(정답률 70%)

function solution(elements) {
  const answer = [];

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let a = elements.slice(j, j + i).reduce((pre, cur) => pre + cur, 0); // 일단 인덱스 j부터 i개씩 잘라서 합 구하기
      if (i + j > elements.length) {
        // 만약 마지막까지 해도 i개를 충족하지 못하면 앞에서부터 부족한 수만큼 더하기.
        const n = i + j - elements.length;
        for (let k = 0; k < n; k++) a += elements[k];
      }
      answer.push(a); // 최종 결과 answer 배열에 push
    }
  }

  return new Set(answer).size; // 중복 제거 후 사이즈 구하기
}
