// K번째 수(정답률 72%)

function solution(array, commands) {
    var answer = [];

    for (const ele of commands){
        const arr = array.slice(ele[0]-1,ele[1]).sort((a,b)=>a-b);
        answer.push(arr[ele[2]-1]);
    }

    return answer;
}