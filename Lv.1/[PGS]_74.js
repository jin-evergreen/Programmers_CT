// 달리기 경주(정답률 48%)

function solution(players, callings) {
    
    const ply_obj = {};
    for(let i=0; i<players.length;i++){
        ply_obj[players[i]] = i;
    }

    for(const call of callings){
        let ply_idx = ply_obj[call];
        let front_player = players[ply_idx-1];

        players[ply_idx] = front_player;
        players[ply_idx-1] = call;

        ply_obj[call] -= 1;
        ply_obj[front_player] += 1;
    }
   
    return players;

}