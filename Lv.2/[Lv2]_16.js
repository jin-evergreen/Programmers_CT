// 영어 끝말잇기(정답률 70%)

function solution(n, words) {
  const word_obj = {};
  const answer = [];
  let last_word = words[0][0];

  for (const [idx, word] of words.entries()) {
    // 첫 단어가 객체에 이미 존재하는지 확인, 없다면 요소 새로 만들기
    if (word[0] == last_word && word_obj[word[0]] == undefined) {
      word_obj[word[0]] = [word];
      last_word = word[word.length - 1]; // 마지막 글자 업데이트
    } else if (
      // 객체에 첫 단어가 이미 존재하지만, 해당 단어는 없는 경우 push
      word[0] == last_word &&
      word_obj[word[0]].includes(word) == false
    ) {
      word_obj[word[0]].push(word);
      last_word = word[word.length - 1];
    } else {
      // 마지막 글자와 첫 글자가 맞지 않거나, 이미 한번 사용했던 단어인 경우
      answer.push((idx % n) + 1);
      idx % n == 0 ? answer.push(idx / n + 1) : answer.push(Math.ceil(idx / n)); // Math.floor(idx/n) + 1 로 대체 가능
      return answer;
    }
  }

  return [0, 0];
}
