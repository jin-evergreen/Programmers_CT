// [1차] 비밀지도(정답률 70%)
function solution(n, arr1, arr2) {
    var answer = [];

    arr1_ch = arr1.map(x=>x.toString(2).padStart(n,'0'));
    arr2_ch = arr2.map(x=>x.toString(2).padStart(n,'0'));

    for(let i=0;i<n;i++){
        let str = '';
        for(let j=0;j<n;j++){
            if(arr1_ch[i][j] == '0' && arr2_ch[i][j]=='0') str+=' '
            else str+='#'
        }
        answer.push(str);
        str='';
    }

    return answer;
}