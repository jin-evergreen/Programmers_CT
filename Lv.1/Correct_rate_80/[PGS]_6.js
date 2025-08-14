// 나머지가 1이 되는 수 찾기 (정답률 80% 이상)

function solution(n) {
    for(let i=1; i<n; i++){
        if(n%i != 1) continue;
        else return i;
    }
}                                                                                         