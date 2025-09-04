// 키패드 누르기(정답률 53%)

function solution(numbers, hand) {
    let answer = '';
    let [left, right] = [10,12];

    const jump = [0,1,2,1,2,3,2,3,4,3,4]

    while (numbers.indexOf(0) != -1){
        let idx = numbers.indexOf(0);
        numbers[idx] = 11;
    }

    for (const number of numbers){
        if(number == 1 || number == 4 || number == 7){
            answer += 'L';
            left = number;
        } else if(number == 3 || number == 6 || number == 9){
            answer += 'R';
            right = number;
        } else {
            if(jump[Math.abs(number - left)] == jump[Math.abs(number - right)]){
                if(hand == 'left'){
                    answer += 'L';
                    left = number;
                } else{
                    answer += 'R';
                    right = number;
                }
            } else if (jump[Math.abs(number - left)] > jump[Math.abs(number - right)]){
                answer += 'R';
                right = number;
            } else {
                answer += 'L';
                left = number;
            }
        }
    }

    return answer;
}