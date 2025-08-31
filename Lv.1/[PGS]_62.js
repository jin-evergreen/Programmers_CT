// 로또의 최고 순위와 최저 순위(정답률 60%)

function solution(lottos, win_nums){
    const result = [];
    const zero = lottos.filter(n=>n == 0).length;
    const rank = {6:1, 5:2, 4:3, 3:4, 2:5}
    let correct_num = 0;

    for(const lotto of lottos){
        for(const win_num of win_nums){
            if(lotto == win_num) correct_num++
        }
    }

    (correct_num+zero > 1) ? result.push(rank[correct_num+zero]): result.push(6);
    (correct_num>1) ? result.push(rank[correct_num]) : result.push(6)

    return result
}