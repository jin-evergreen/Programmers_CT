// 기사단원의 무기(정답률 67%)

function solution(number, limit, power) {
    const count = [];
    let result = 0;

    for(let i=1; i<=number; i++){
        let cnt = 0;
        for(j=1;j*j<=i;j++) if(i%j==0) cnt += (j*j==i) ? 1 : 2;
        count.push(cnt);
    }

    for(let i=0;i<count.length;i++){
        if(count[i]>limit) result+=power;
        else result+=count[i];
    }
    
    return result;
}