// 가장 가까운 같은 글자(정답률 74%)

function solution(s) {
    var answer = [];
    let step = 0;

    for (let i = 0; i < s.length; i++){
        for(j=i-1; j>-2; j--){
            step++;
            if(j === -1){
                answer.push(j);
                step = 0;
                break;
            } else if (s[i] == s[j]){
                answer.push(step);
                step = 0;
                break;
            }
        }
    }

    return answer;
}