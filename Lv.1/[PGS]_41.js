// 두 개 뽑아서 더하기 (정답률 73%)

function solution(numbers){
    const arr = [];
    for(i=0;i<numbers.length;i++){
        for(j=i+1;j<numbers.length;j++) arr.push(numbers[i]+numbers[j]);
    }
    return [...new Set(arr)].sort((a,b)=>a-b);
}