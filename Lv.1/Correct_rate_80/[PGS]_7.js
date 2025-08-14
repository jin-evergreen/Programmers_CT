// 두 정수 사이의 합 (정답률 80% 이상)

function solution(a, b) {
    var answer = 0;
    const [num1, num2] = a < b ? [a, b] : [b, a];
    for (let i=num1; i<=num2; i++) answer+=i;
    return answer;
}