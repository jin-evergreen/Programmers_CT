// 최소 직사각형(정답률 75%)

function solution(sizes) {
    const width = [];
    const height = [];

    for(i=0;i<sizes.length;i++){
        if(sizes[i][0]>sizes[i][1]){
            width.push(sizes[i][0]);
            height.push(sizes[i][1]);
        } else {
            width.push(sizes[i][1]);
            height.push(sizes[i][0]);
        }
    }

    return Math.max(...width)*Math.max(...height);
}