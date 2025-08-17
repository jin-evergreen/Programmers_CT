// 평균 구하기 (정답률 80% 이상)
function solution(arr) {
    var answer = 0;
    const sum = arr.reduce((acc,cum)=>acc+cum,0);
    return sum/arr.length;
}