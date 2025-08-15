// 서울에서 김서방 찾기 (정답률 80% 이상)

function solution(seoul) {
    var answer = '';
    for(let i=0; i<seoul.length;i++) if(seoul[i] == 'Kim') return `김서방은 ${i}에 있다`
}