// 약수의 합 (정답률 80% 이상)

function solution(n) {
    var answer = 0;
    const arr = [];

    for(let i=1; i<=n; i++){
        if(n%i == 0){
            arr.push(i)
        }
    }
    answer = arr.reduce((a,c)=>a+c,0);
    return answer;
}                                                                                            