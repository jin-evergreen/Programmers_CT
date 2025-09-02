// 성격 유형 검사하기(정답률 54%)

function solution(survey, choices) {
    let answer = '';
    const type = {'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0};
    const score = [0,3,2,1,0,1,2,3];

    for(let i=0; i<choices.length; i++){
        if(choices[i] <= 3) type[survey[i][0]] += score[choices[i]];
        else if(choices[i] >= 5) type[survey[i][1]] += score[choices[i]];
        else continue;
    }

    const keys = Object.keys(type);
    for(let i=0;i<keys.length;i+=2) type[keys[i]] < type[keys[i+1]] ? answer+=keys[i+1] : answer+=keys[i];

    return answer;
}