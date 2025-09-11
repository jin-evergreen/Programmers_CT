// JadenCase 문자열 만들기(정답률 79%)

function solution(s) {
    const arr = s.split(' ');

    for(const [idx,str] of arr.entries()){
        let upperStr = '';
        for(let i=0;i<str.length;i++){
            if(i == 0) upperStr += str[i].toUpperCase();
            else upperStr += str[i].toLowerCase();
        }
        arr[idx] = upperStr;
    }

    return arr.join(' ');
}