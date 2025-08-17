// 직사각형 별 찍기 (정답률 80% 이상)

process.stdin.setEncoding('utf8'); 
process.stdin.on('data', data => { // 입력값 받기
    const n = data.split(" "); // 입력값(문자열) split하여 배열로 변환
    const a = Number(n[0]), b = Number(n[1]); // 변환된 배열 활용하여 변수 할당
    for(let i=0;i<b;i++){
        let star = '';
        for(let j=0;j<a;j++) star += '*'
        console.log(star);
    }
})