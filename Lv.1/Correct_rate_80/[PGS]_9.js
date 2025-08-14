// 정수 내림차순으로 배치하기 (정답률 80% 이상)

function solution(n) {
    const arr = [];
    for(const num of n.toString()) arr.push(num);
    arr.sort((a,b)=>b-a);
    return + arr.reduce((acc,cur)=>acc+cur,'')
}