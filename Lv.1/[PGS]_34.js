// 카드 뭉치 (정답률 71%)

function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let top1 = 0;
    let top2 = 0;

    for(const ele of goal){
        if (ele == cards1[top1]){
            top1++;
        } else if(ele == cards2[top2]){
            top2++;
        } else{
            answer = 'No';
            break;
        }
    }

    return answer;
}