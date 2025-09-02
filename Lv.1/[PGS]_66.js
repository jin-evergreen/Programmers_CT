// 햄버거(정답률 57%)

function solution(ingredient) {
    let answer = 0;
    let make = [];
    for(const ing of ingredient){
        make.push(ing);
        if(JSON.stringify(make.slice(-4)) == JSON.stringify([1,2,3,1])){
            make.splice(-4,4);
            answer++
        }
    }
    return answer;
}