// 문자열 내 마음대로 정렬하기(정답률 72%)

function solution(strings, n) {
    const str = strings.sort((a,b)=>a.localeCompare(b));
    return str.sort((a,b)=>a[n].charCodeAt()-b[n].charCodeAt());
}