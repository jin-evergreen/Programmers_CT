// 바탕화면 정리(정답률 52%)

function solution(wallpaper) {
    let [lux,luy,rdx,rdy] = [-1,-1,-1,-1];

    // lux, rdx 계산
    for(let i=0; i<wallpaper.length; i++){
        if(wallpaper[i].includes('#') == true) {
            if(lux == -1) lux = i;
            if(i > rdx) rdx = i;
        }
    }

    // luy, rdy 계산
    for(const ele of wallpaper){
        for(let i=0;i<ele.length;i++){
            if(ele[i] == '#'){
                if(luy == -1) luy = i;
                else if(luy > i) luy = i
                
                if(i > rdy) rdy = i
            }
        }
    }

    return [lux, luy, rdx+1, rdy+1];
}