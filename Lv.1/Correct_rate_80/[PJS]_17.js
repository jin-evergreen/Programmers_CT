// 핸드폰 번호 가리기 (정답률 80% 이상)

function solution(phone_number) {
    var answer = phone_number.split("")
    for(let i=0;i<phone_number.length-4;i++) answer[i] = "*"
    return answer.join('')
}