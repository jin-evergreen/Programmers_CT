// 추억 점수 (정답률 71%)

function solution(name, yearning, photo) {
    var answer = [];
    const hash = {};

    for(i=0;i<name.length;i++){
        hash[name[i]] = yearning[i];
    }

    for (const arr of photo){
        let score = 0;
        arr.forEach(e => {
            hash[e] != undefined ? score+= hash[e] : score+=0
        });
        answer.push(score);
    }

    return answer;
}