// 택배 상자 꺼내기(정답률 36%)

function solution(n, w, num) {
    let answer = 0;
    const storage = [];
    let floor = [];
    let reverse = 0;

    for(let i=1;i<=n;i++){
        floor.push(i);


        if(i == n){ // 마지막 요소일 경우, 다 못채워도 push
            // 만약 맨 위층이 역순인데 w개를 다 채우지 못했을 경우, 앞쪽을 채울 0의 개수
            let zero = w - floor.length;

            if(reverse%2 == 1){
                floor.sort((a,b)=>b-a); // 짝수층 역순 정렬
                for(let i=0;i<zero;i++) floor.unshift(0); // 역순일 때, w개 다 못채우면 0으로 채움
                storage.push(floor);
                reverse += 1
            }else {
                storage.push(floor);
                reverse += 1
            }
            break;
        } else if(floor.length == w){ // 한 층에 w개를 채우면 Push
            if(reverse%2 == 1){
                floor.sort((a,b)=>b-a); 
                storage.push(floor);
                reverse += 1;
                floor = [];
            }else {
                storage.push(floor);
                reverse += 1
                floor = [];
            }
        }
    }

    // 가져가야 하는 상자의 층, 인덱스 구하기
    let [target_floor, target_idx] = [0,0];
    for(let i=0;i<storage.length;i++){
        if(storage[i].indexOf(num) != -1){
            target_floor = i;
            target_idx = storage[i].indexOf(num);
            break;
        }
    }

    for(i=target_floor;i<storage.length;i++){
        if(storage[i][target_idx] == 0 || storage[i][target_idx]==undefined) break;
        answer++;
    }

    return answer;
}