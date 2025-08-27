// 덧칠하기(정답률 65%)

function solution(n, m, section) {
    var answer = 0;
    let roll_wall = 0;
    
    for(let i=0;i<section.length;i++){
        if(roll_wall<section[i]){
            roll_wall = section[i]+m-1;
            answer++;
        } else continue;
    }

    return answer;
}