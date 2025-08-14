// 자릿수 더하기 (정답률 80% 이상)

function solution(n)
{
    var answer = 0;
    for (const num of n.toString()) answer += +num
    return answer;
}
