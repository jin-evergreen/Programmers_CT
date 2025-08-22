// 삼총사(정답률 77%)

function solution(number) {
    var answer = 0;

    for(let idx=0; idx<number.length; idx++){
        let num = number[idx];
        const newArr = [...number.slice(0,idx),...number.slice(idx+1)];
        
        for(let i=0;i<newArr.length;i++){
            for(let j=i+1;j<newArr.length;j++){
                if(num+newArr[i]+newArr[j]==0) answer++;
                else continue;
            }
        }
    }

    return answer/3;
}