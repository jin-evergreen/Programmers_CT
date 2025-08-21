// 시저 암호 (정답률 74%)

function solution(s,n){
    let answer='';
    for(const char of s){
        if(char==' '){
            answer+=char;
            continue;
        }
        let code_num = char.charCodeAt();
        for(let i=0;i<n;i++){
            if(code_num=='z'.charCodeAt()) code_num='a'.charCodeAt()-1;
            else if(code_num=='Z'.charCodeAt()) code_num='A'.charCodeAt()-1;
            code_num += 1;
        }
        answer+=String.fromCharCode(code_num);
    }
    return answer;
}