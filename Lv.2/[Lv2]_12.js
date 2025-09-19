// 구명보트(정답률 71%)

function solution(people, limit) {
  people.sort((a, b) => a - b);
  let boat = 0;
  let idx = 0;

  for (let i = people.length - 1; i >= idx; i--) {
    if (i == idx) {
      // 만약 혼자만 남으면, 몸무게 상관 없이 혼자 타고 가기
      boat++;
      break;
    }

    if (people[i] > limit - 40)
      boat++; // 같이 탈 수 있는 1인 최대 몸무게 넘으면 혼자 타기
    else if (people[idx] + people[i] <= limit) {
      // 같이 탈 수 있으면 같이 타기
      boat++;
      idx++;
    } else boat++; // 같이 탈 수 있는 1인 최대 몸무게는 넘지 않지만, 현재 같이 탈 수 있는 사람이 없을 때 혼자 타기
  }
  return boat;
}
