// 이상한 문자 만들기(정답률 76%)

function solution(s) {
    var answer = '';
    let idx = 1;
    for(const char of s){
        if(char==' ') {
            answer += char; 
            idx = 0;
        }
        else if(idx%2==1) answer += char.toUpperCase();
        else if(idx%2==0) answer+=char.toLowerCase();
        idx++;
    }
    return answer;
}