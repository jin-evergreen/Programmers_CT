// 대충 만든 자판(정답률 60%)

function solution(keymap, targets) {
    const answer = [];
    
    for(const target of targets){
        let count = 0;
        for(let i=0;i<target.length;i++){
            let push = 101;
            for(const key of keymap){
                if(key.indexOf(target[i]) != -1){
                    push = Math.min(key.indexOf(target[i])+1,push);
                } else continue;
            }
            if(push == 101) {
                count = 0; // 만약 target 철자가 3개인데, 앞 2개는 key에 존재하지만 마지막 글자는 존재하지 않을 때 count가 0이 아닐 경우 대비.
                break;
            } 
            else count += push;
        }
        (count == 0) ? answer.push(-1) : answer.push(count);
    }

    return answer;
}
