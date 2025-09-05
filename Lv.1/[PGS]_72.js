// 개인정보 수집 유효기간(정답률 49%)

function solution(today, terms, privacies) {
    const answer = [];
    const terms_obj = {};

    // 약관을 객체로 변환
    terms.forEach(ele => {
        const [type, months] = ele.split(' ');
        terms_obj[type] = Number(months);
    });

    // 오늘 날짜를 총 일 수로 변환
    const [ty, tm, td] = today.split('.').map(Number);
    const todayDays = ty * 12 * 28 + tm * 28 + td;

    privacies.forEach((p, index) => {
        const [dateStr, type] = p.split(' ');
        const [y, m, d] = dateStr.split('.').map(Number);
        
        // 시작일을 일 수로 변환
        let startDays = y * 12 * 28 + m * 28 + d;

        // 약관 개월 수 * 28일 더하기
        let expireDays = startDays + terms_obj[type] * 28 - 1; 
        // -1 하는 이유: "당일 포함" 이라서 하루 전날까지 유효
        
        if (todayDays > expireDays) {
            answer.push(index + 1);
        }
    });

    return answer;
}
