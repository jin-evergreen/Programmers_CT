// [PCCP 기출문제] 붕대 감기(정답률 43%)

function solution(bandage, health, attacks) {
    let answer = health;
    let cont = 0; // 연속 회복 시간 관리
    let seconds = 0; // 초 관리
    let atk_num = 0; // 공격한 횟수(attacks 인덱스 관리용)
    const last = attacks[attacks.length-1][0]; // 마지막 공격 시간


    for(let i=0; i<last; i++){
        // 초 증가
        seconds++;

        // 현재 초가 공격당하는 초라면
        if(attacks[atk_num][0] == seconds) {
            // 체력 감소, 연속 회복 초기화, 죽으면 -1 return, 공격 횟수 관리, 체력 회복 없이 continue
            answer -= attacks[atk_num][1];
            cont = 0;
            if(answer <= 0) return -1
            else if(atk_num + 1 <= attacks.length) atk_num++;
            continue;
        }

        // 체력이 최대치가 아니라면
        if(answer != health){
            // 체력 회복, 연속 회복 시간 반영
            answer += bandage[1];
            cont++;
            // 연속 회복 시간 조건 충족 -> 추가 회복, 연속 회복 초기화
            if(cont == bandage[0]) {
                answer += bandage[2];
                cont = 0;
            }
        }

        // 체력이 최대치를 넘어 회복하면, 최대치로 초기화
        if(answer > health) answer = health;
    }

    return answer;
}