// 유연근무제(정답률 49%)

function solution(schedules, timelogs, startday) {
    let answer = 0;

    for(let i=0;i<schedules.length;i++){
        let time_arr = timelogs[i];
        let std = startday;
        let prize = true;

        let limit = schedules[i]+10;
        
        if(Number(String(limit).slice(-2))>=60){
            let hour = Number(String(limit).slice(0,-2));
            let min = Number(String(limit).slice(-2));

            hour++;
            min -= 60;

            limit = hour*100+min;
        }

        for(const time of time_arr){
            if(time > limit && (std % 7 != 0 && std % 7 != 6)){
                prize = false;
                std++;
                break;
            }
            std++
        }

        if(prize) answer++;
    }

    return answer;
}
