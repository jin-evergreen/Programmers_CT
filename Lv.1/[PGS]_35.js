// 과일 장수 (정답률 65%)

function solution(k, m, score) {
    var answer = 0;

    const pre = preprocess(score,k);

    while(pre.length >= m){
        slice_arr = pre.slice(-m);
        answer += (slice_arr[0]*m);
        pre.length = pre.length-m;
    }

    return answer;
}

function preprocess(arr,max_value){
    const ret = arr.filter((value)=> value <= max_value);
    return ret.sort((a,b) => a-b);
}