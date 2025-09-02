// 크레인 인형 뽑기 게임(정답률 54%)

function solution(board, moves) {
    let answer = 0;
    const basket = [];
    let top = basket.length-1;

    for(const move of moves){
        for(let i=0;i<board.length;i++){
            if(board[i][move-1] != 0){
                basket.push(board[i][move-1]);
                top++;
                board[i][move-1] = 0;

                if(basket[top] === basket[top-1]){
                    answer += 2;
                    basket.pop();
                    basket.pop();
                    top -= 2;
                }

                break;
            } else continue;
        }
    }
    return answer;
}