// 부족한 금액 계산하기 (정답률 80% 이상)
function solution(price, money, count) {
    let total = 0;
    for(let i=1;i<=count;i++) total += price*i
    return money-total>0?0:Math.abs(money-total);
}