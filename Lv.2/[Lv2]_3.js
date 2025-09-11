// 최솟값 만들기(정답률 79%)

function solution(A,B){
    let answer = 0;
    const [a_arr,b_arr] = [A,B]
    
    a_arr.sort((a,b)=>a-b);
    b_arr.sort((a,b)=>b-a);

    for(let i=0;i<a_arr.length;i++){
        answer += (a_arr[i] * b_arr[i])
    }

    return answer
}
