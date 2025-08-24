// 콜라 문제(정답률 72%)

function solution(a, b, n) {
    let answer = 0;
    let rem = 0;

    while (n>=a){
        answer+=Math.floor(n/a)*b;
        rem += n%a;
        n = Math.floor(n/a)*b;

        if(n<a){
            n+=rem;
            rem = 0;
        }
    }
    return answer;
}