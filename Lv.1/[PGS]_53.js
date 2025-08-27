// 폰켓몬(정답률 67%)
function solution(nums) {
    var answer = 0;
    const loop = nums.length/2

    for(let i=0;i<loop;i++){
        let mon = nums[0]
        if(nums.length != 0) answer++;
        nums = nums.filter(value => mon!=value)
    }

    return answer;
}