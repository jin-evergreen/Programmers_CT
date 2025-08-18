// 문자열 나누기 (정답률 60%)

function solution(s) {
    let answer = 0;
    let first_char;
    let a = 0;
    let b = 0;

    for(const c of s){
        if(a==b){
            first_char = c;
            answer += 1
        }
        
        if (first_char == c)
            a += 1;
        else
            b += 1;
    }
    
    return answer;
}
