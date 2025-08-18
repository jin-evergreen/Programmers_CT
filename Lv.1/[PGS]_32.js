// 크기가 작은 부분 문자열 (정답률 78%)

function solution(t, p) {
    var answer = 0;

    for(i=0; i<=t.length-p.length;i++){
        let num = Number(t.substr(i,p.length));
        if (num <= Number(p)) answer++;
    }

    return answer;
}