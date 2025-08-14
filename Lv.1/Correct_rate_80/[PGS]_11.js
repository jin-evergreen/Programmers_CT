// 하샤드 수 (정답률 80% 이상)

function solution(x) {
    const n = + x.toString().split("").reduce((acc,cur)=>+acc + +cur,0)
    return x%n == 0? true:false;
}