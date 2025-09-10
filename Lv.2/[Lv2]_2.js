// 올바른 괄호(정답률 79%)

function solution(s){
    let answer = true;
    const stack = [];
    let top = -1;

    for(const char of s){
        if(char == ')' && stack[top] == '(') {
            stack.pop();
            top--;
        }
        else {
            stack.push(char);
            top++;
        }
    }

    if(stack.length != 0) answer = false;
    return answer;
}