// 자연수 뒤집어 배열로 만들기 (정답률 80% 이상)

function solution(n) {
    var answer = [];
    for (const num of n.toString()) answer.unshift(+num)
    return answer;
}