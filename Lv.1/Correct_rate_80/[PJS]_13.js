// 없는 수 더하기 (정답률 80% 이상)

function solution(numbers) {
    var answer = 0;
    for(i=0;i<=9;i++){
        if(!numbers.includes(i)) answer+=i;
    }
    return answer;
}