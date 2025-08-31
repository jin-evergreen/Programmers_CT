// 실패율(정답률 62%)

function solution(N,stages){
    const player = new Array(N+1).fill(0);
    const arr = [];

    for(let i=1;i<=N;i++){
        for(let j=0;j<stages.length;j++) if(stages[j]>=i) player[i]+=1;
    }
    // player[i] => i 스테이지 도전자 수

    for(let i=1;i<=N;i++){
        let count = 0;
        for(j=0;j<stages.length;j++){
            if(stages[j]==i) count++;
        }
        let failure = count / player[i];
        arr.push({'stage':i, 'failure':failure});
    }

    arr.sort((a,b)=>b.failure-a.failure);
    for(let i=0;i<arr.length;i++) arr[i] = arr[i]['stage'];
    return arr;
}