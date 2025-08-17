// 최대공약수와 최소공배수 (정답률 80% 이상)
function solution(n, m) {
    var answer = [];
    let a,b;
    n>m?[a,b]=[n,m]:[a,b]=[m,n];

    // 최대공약수 구하기
    const arr = [];
    for(let idx=1;idx<=b;idx++) if(b%idx==0) arr.push(idx);
    for(let idx_2=arr.length-1; idx_2>=0;idx_2--){
        if(a%arr[idx_2]==0) {
            answer.push(arr[idx_2]); 
            break;
        }
    }

    // 최소공배수 구하기
    let i = 1;
    while(true){
        if((a*i)%b==0){
            answer.push(a*i);
            break;
        } else i++;
    }

    return answer;
}