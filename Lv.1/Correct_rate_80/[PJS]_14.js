// 나누어 떨어지는 숫자 배열 (정답률 80% 이상)

function solution(arr, divisor) {
    var answer = [];

    for(const num of arr) if(num%divisor == 0) answer.push(num)
    answer.length==0? [-1]:answer.sort((a,b)=>a-b)
}


// answer.length==0? answer.push(-1):answer.sort((a,b)=>a-b)
// 위 코드처럼 했을 때 true인 경우 [-1]을 반환하는 것이 아닌,
// 배열의 길이 1 반환하여 문제의 조건과 맞지 않음.