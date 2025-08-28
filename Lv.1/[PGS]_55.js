// 소수 찾기(정답률 64%)

function solution(n) {
    // 0부터 n까지 소수 여부를 저장할 배열 (기본은 전부 true)
    const isPrime = new Array(n + 1).fill(true);
    
    isPrime[0] = false; // 0은 소수 아님
    isPrime[1] = false; // 1도 소수 아님

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            // i의 배수들은 소수가 아님 (i*i부터 시작)
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // true인 값(소수)만 개수 세기
    return isPrime.filter(Boolean).length;
}
