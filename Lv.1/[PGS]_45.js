// 숫자 문자열과 영단어(정답률 73%)

function solution(s) {
    let answer = '';
    let text = '';

    const obj = {
        zero : 0,
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9
    }

    for(const char of s){
        if(isNaN(Number(char))) text+=char;
        else answer+=char;

        if(obj[text]!=undefined){
            answer += obj[text];
            text = '';
        } else continue;
    }
    return +answer;
}