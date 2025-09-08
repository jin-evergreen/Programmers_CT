// 가장 많이 받은 선물(정답률 28%)

function solution(friends, gifts) {
    let answer = 0;

    const score = {}; // 선물 지수 객체
    const index = {}; // 친구 별 인덱스 객체
    const chart = {}; // 주고받은 선물 차트 객체

    // 객체 초기화
    for(let i=0;i<friends.length;i++){
        score[friends[i]] = Array(2).fill(0);
        index[friends[i]] = i;
        chart[friends[i]] = Array(friends.length).fill(0);
    }

    for(const gift of gifts){
        const g = gift.split(' ');

        // 선물 지수 업데이트
        score[g[0]][0] += 1;
        score[g[1]][1] += 1;

        // chart 객체 업데이트
        chart[g[0]][index[g[1]]] += 1
    }

    // 선물 지수 계산
    const keys = Object.keys(score);
    for(const key of keys) score[key] = score[key][0] - score[key][1];

    // 최종 계산
    for(const a of friends){
        let next_present = 0;
        for(const b of friends){
            if(a == b) continue;
            const give = chart[a][index[b]];
            const receive = chart[b][index[a]];

            if(give > receive) next_present++;
            else if(give == receive && score[a]>score[b]) next_present++

            if(answer < next_present) answer = next_present;
        }
    }


    return answer;
}