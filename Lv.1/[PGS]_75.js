// 공원 산책(정답률 47%)

function validMove(answer, rt, park){

    const [y,x] = [park.length, park[0].length];
    
    for(let i=0;i<Number(rt[1]);i++){
        switch(rt[0]){
            case 'E':
                answer[1] += 1;
                break;
            case 'W':
                answer[1] -= 1;
                break;
            case 'S':
                answer[0] += 1;
                break;
            case 'N': 
                answer[0] -= 1;
                break;
        }
        if(answer[0] >= y || answer[1] >= x || answer[0]< 0 || answer[1]<0) return false;
        if(park[answer[0]][answer[1]] == 'X') return false;
    }

  
    return true;
}


function solution(park, routes) {
    let answer = [];

    for(let i=0;i<park.length;i++){
        for(let j=0;j<park[i].length;j++){
            if(park[i][j]=='S'){
                answer = [i,j];
                break;
            }
        }
    }

    for(const route of routes){
        let rt = route.split(' ');
        if(validMove([...answer], rt, park)){
            switch(rt[0]){
                case 'E':
                    answer[1] += Number(rt[1]);
                    break;
                case 'W':
                    answer[1] -= Number(rt[1]);
                    break;
                case 'S':
                    answer[0] += Number(rt[1]);
                    break;
                case 'N': 
                    answer[0] -= Number(rt[1]);
                    break;
            }
        }     
    }

    return answer;
}