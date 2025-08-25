// 모의고사(정답률 66%)

function solution(answers) {
    var answer = [];
    const rule = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    const score = [];

    for (const stu of rule){
        let pre_score = 0;
        for(let i=0;i<answers.length;i++) if(answers[i]==stu[i%stu.length]) pre_score++;
        score.push(pre_score);
    }

    score.forEach((ele,idx)=> {
        if(ele == Math.max(...score)) answer.push(idx+1)
    })
    
    return answer;
}