// 최댓값과 최솟값(정답률 80%)

function solution(s) {
    const arr = s.split(' ').map(ele=>Number(ele));
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return `${min} ${max}`
}