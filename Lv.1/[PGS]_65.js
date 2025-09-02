// 체육복(정답률 58%)

function solution(n, lost, reserve) {
    let answer = n-lost.length;
    const lost_per = [];

    for(const l of lost){
        if(reserve.indexOf(l) != -1){
            reserve.splice(reserve.indexOf(l),1);
            answer++;
        } else lost_per.push(l)
    }

    lost_per.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);


    for(const lost_num of lost_per){
        if(reserve.indexOf(lost_num-1) != -1){
            reserve.splice(reserve.indexOf(lost_num-1),1);
            answer++;
        } else if(reserve.indexOf(lost_num+1) != -1){
            reserve.splice(reserve.indexOf(lost_num+1),1);
            answer++;
        } else continue;
    }

    return answer;
}