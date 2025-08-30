// 숫자 짝꿍(정답률 57%)

function solution(x, y) {
    const a = new Array(10).fill(0);
    const b = new Array(10).fill(0);
    const result = [];

    for (const ch of x) a[Number(ch)]++;
    for (const ch of y) b[Number(ch)]++;

    for (let i = 9; i >= 0; i--) {
        const rep = Math.min(a[i], b[i]);
        for (let j = 0; j < rep; j++) {
            result.push(i);
        }
    }

    if (result.length === 0) return '-1';
    if (result[0] === 0) return '0';
    return result.join('');
}
