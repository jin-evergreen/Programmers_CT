// 수박수박수박? (정답률 80%)

function solution(n) {
    var answer = '';
    for(let i=1;i<=n;i++) i%2==1? answer = answer+'수': answer = answer+'박'
    return answer;
}