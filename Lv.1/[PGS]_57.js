// 옹알이(정답률 63%)

function solution(babbling){
    const word = {
        'a' : 'aya', 'y' : 'ye', 'w' : 'woo', 'm' : 'ma'
    }
    let answer = 0;

    for(let str of babbling){
        let last_word = '';

        while(str.length != 0){
            let s = '';
            if(word[str[0]]!==undefined) s = word[str[0]];
            else break;

            if(s === str.slice(0,s.length) && s !== last_word) {
                str = str.replace(s,'');
                last_word = s;
            }
            else break;
        }
        
        if(str.length == 0) answer++;
    }

    return answer;
}