// 명예의 전당 (정답률 72%) 

function solution(k, score) {
    var answer = [];
    const pre = [0];

    for (const ele of score){
        for(let i=0;i<pre.length;i++){
            if(ele < pre[i]) continue;
            else pre.splice(i,0,ele); break;
        }

        if(pre.length > k) answer.push(pre[k-1]);
        else answer.push(pre[pre.length-2]);

    }

    return answer;
}

