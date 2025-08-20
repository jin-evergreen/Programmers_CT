// 예산 (정답률 77%)

function solution(d, budget) {
    let [sum,count] = [0,0];
    for(const cost of d.sort((a,b)=>a-b)){
        if(budget-sum<cost) break;
        sum+=cost;
        count++;
    }
    return count;
}