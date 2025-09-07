// 신고 결과 받기(정답률 41%)

function solution(id_list, report, k){
    const answer = [];
    const report_num = {}; // 신고 당한 횟수 객체
    const report_per = {}; // 해당 id가 신고한 사람들 객체

    // 객체에 요소 업데이트
    for(const rep of report){
        let ele = rep.split(' ');

        if(report_per[ele[0]] == undefined) report_per[ele[0]] = [ele[1]];
        else if(report_per[ele[0]].includes(ele[1])) continue; // 현재 신고당한 id가, 이전에 같은 사람한테 신고당한 이력이 있으면 continue
        else report_per[ele[0]].push(ele[1]);
        
        if(report_num[ele[1]] == undefined) report_num[ele[1]] = 1;
        else report_num[ele[1]] += 1;

    }

    // 정지당할 id 추출
    const ban_id = Object.entries(report_num).filter(ele => ele[1] >= k).map(ele => ele = ele[0]);

    // report_per, ban_id 활용 answer 구하기
    for(const id of id_list){
        let id_report = report_per[id];
        let ban_num = 0;

        // 만약 한명도 신고하지 않으면, 0 push
        if(id_report == undefined){
            answer.push(ban_num);
            continue;
        }

        // ban_id 순회하며 includes로 확인하여 answer 값 구함
        for(const b of ban_id){
            if(id_report.includes(b)) ban_num++;
        }

        answer.push(ban_num);

    }

    return answer;
}