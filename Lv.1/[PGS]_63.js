// 둘만의 암호(정답률 60%)

function solution(s, skip, index) {
    var answer = '';
    let skip_code = skip.split('').map(c=> c = c.charCodeAt());
    
    for (const char of s) {
        let asc = char.charCodeAt();
        for(let i=0;i<index;i++){
            asc++;
            if(asc == 'z'.charCodeAt()+1) asc = 'a'.charCodeAt()
            if(skip_code.includes(asc)) i--;
        }
        answer += String.fromCharCode(asc);
    }

    return answer;
}