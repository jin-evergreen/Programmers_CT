// 다트게임(정답률 60%)

function solution(datResult){
    const resultArr = [];
    let num = '';
    let idx = -1;

    for(const s of datResult){
        if(!isNaN(Number(s))){
            num += s;
            continue;
        }

        if(num.length != 0 && resultArr[idx+1]==undefined){
            resultArr.push(Number(num));
            num='';
            idx++;
        }

        switch(s){
            case 'S':
                resultArr[idx] = resultArr[idx]**1;
                continue;
            case 'D':
                resultArr[idx] = resultArr[idx]**2;
                continue;
            case 'T':
                resultArr[idx] = resultArr[idx]**3;
                continue;
            case '#':
                resultArr[idx] = resultArr[idx]*-1;
                continue;
            case '*':
                resultArr[idx] = resultArr[idx]*2;
                if(resultArr[idx-1] != undefined) resultArr[idx-1] = resultArr[idx-1]*2;
                continue;
        }
    }
    return resultArr.reduce((pre,cur)=> pre+cur,0);
}