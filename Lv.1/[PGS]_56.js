// 소수 만들기(정답률 64%)

function solution(nums) {
    var answer = 0;
    const n = nums.length;
    const arr = [];

    for(let i=0;i<n-2;i++){
        for(let j=i+1;j<n-1;j++){
            for(let k=j+1;k<n;k++) arr.push(nums[i]+nums[j]+nums[k]);
        }
    }

    for(let i=0;i<arr.length;i++){
        let cnt = 0;
        for(let j=1;j*j<=arr[i];j++) if(arr[i]%j==0) cnt+=(j*j==arr[i])?1:2;
        if(cnt == 2) answer++;
    }
    
    return answer;
}