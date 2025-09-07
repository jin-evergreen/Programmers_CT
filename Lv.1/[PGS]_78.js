// [PCCP 기출문제] 동영상 재생기(정답률 40%)

function convert_seconds(time){
    const arr = time.split(':');
    return Number(arr[0])*60 + Number(arr[1]);
}

function solution(video_len, pos, op_start, op_end, commands) {
    // 분 단위를 초 단위로 바꾸기
    const len = convert_seconds(video_len);
    let start = convert_seconds(pos);
    const op_st = convert_seconds(op_start);
    const op_ed = convert_seconds(op_end);

    // 명령어 시작 전 시작점이 오프닝 구간 내에 있는지 확인
    if(start >= op_st && start <= op_ed) start = op_ed;

    for(const cmd of commands){
        // 명령어 따라서 계산
        if(cmd == 'next') start += 10;
        else if(cmd == 'prev') start -= 10;

        if(start < 0) start = 0;
        else if(start > len) start = len;
        
        if(start >= op_st && start <= op_ed) start = op_ed;
    }

    // 원하는 answer의 형태로 만들기
    const min = Math.floor(start/60);
    const seconds = start%60;
    
    return String(min).padStart(2,'0') + ':' + String(seconds).padStart(2,'0');
}
