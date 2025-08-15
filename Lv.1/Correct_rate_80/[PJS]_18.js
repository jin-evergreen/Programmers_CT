// 가운데 글자 가져오기 (정답률 80% 이상)

function solution(s) {
    if(s.length%2==1) return s[Math.floor(s.length/2)]
    else return s.slice(s.length/2-1,s.length/2+1)
    // else return s[s.length-1]+s[s.length]
}