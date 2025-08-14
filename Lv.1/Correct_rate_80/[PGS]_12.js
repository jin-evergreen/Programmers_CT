// 음양 더하기 (정답률 80% 이상)

function solution(absolutes, signs) {
    for (let i=0; i<signs.length; i++){
        if(signs[i] == false) absolutes[i] = -absolutes[i];
    }
    return absolutes.reduce((acc,cur)=>acc+cur,0);
}
