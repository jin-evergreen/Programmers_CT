// x만큼 간격이 있는 n개의 숫자 (정답률 80% 이상)

function solution(x, n) {
    var answer = [];
    for(let i=1; i<=n; i++) answer.push(x*i);
    return answer;
}