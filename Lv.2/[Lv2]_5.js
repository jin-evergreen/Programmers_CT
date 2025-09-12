// 이진 변환 반복하기(정답률 78%)

function solution(s) {
    let remove = 0;
    let times = 0;
    let str = s;

    while(str != "1"){
        let afterLength = 0;
        for(const num of str){
            if(num == '1') afterLength++;
            else remove++;
        }
        str = Number(afterLength).toString(2);
        times++;
    }

    return [times, remove];
}