// 완주하지 못한 선수(정답률 59%)

function solution(participant,completion){
    const player = {};
    for(const ptc of participant) player[ptc] = (player[ptc] || 0) + 1
    for(const cpt of completion) player[cpt] = player[cpt] - 1
    return Object.entries(player).find(([k,v])=>v===1)?.[0];  
}