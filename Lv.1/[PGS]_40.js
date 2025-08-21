// 3진법 뒤집기 (정답률 77%)

function solution(n) {
    let num = n.toString(3);
    return parseInt(num.split('').reverse().join(''), 3); 
}