// 문자열 내 p와 y의 개수 (정답률 80% 이상)

function solution(s){
    let a = 0, b = 0;
    for(const char of s){
        if(char == 'p' || char == 'P') a++; // char.toLowerCase() == 'p'(다른 예)
        else if(char == 'y' || char == 'Y') b++;
    }
    return a == b? true:false;
}