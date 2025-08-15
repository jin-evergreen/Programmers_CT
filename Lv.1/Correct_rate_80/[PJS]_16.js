// 콜라츠 추측 (정답률 80% 이상)

function solution(num) {
    if (num==1) return 0;
    for(let i=0; i=500;i++){
        if(num == 1) return i;
        else if(num%2==0) num = num/2;
        else num=num*3+1
    }
    if(num != 1) return -1;
}