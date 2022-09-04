// par[i]번째 원소가 comp에 있는지 탐색
// 없다고 하면 par[i] return;
// par[0~par.length]까지 반복
function solution(participant, completion) {
  var answer = "";
  for (i = 0; i < participant.length; i++) {
    if (!completion.includes(participant[i])) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "leo"가 출력
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "vinko"가 출력
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
// "steave"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "steave"가 출력
console.log(solution(["mislav", "stanko", "steave", "ana"], ["stanko", "ana", "mislav"]));

//풀이
/* answer = participant.find((v, i) => {
  if (!completion.includes(v)) {
    return true;
  }
});

return answer; */
