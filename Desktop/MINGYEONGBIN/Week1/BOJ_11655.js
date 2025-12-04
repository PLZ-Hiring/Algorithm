/*ROT13은 카이사르 암호의 일종으로 영어 알파벳을 13글자씩 밀어서 만든다.

예를 들어, "Baekjoon Online Judge"를 ROT13으로 암호화하면 "Onrxwbba Bayvar Whqtr"가 된다. ROT13으로 암호화한 내용을 원래 내용으로 바꾸려면 암호화한 문자열을 다시 ROT13하면 된다. 앞에서 암호화한 문자열 "Onrxwbba Bayvar Whqtr"에 다시 ROT13을 적용하면 "Baekjoon Online Judge"가 된다.

ROT13은 알파벳 대문자와 소문자에만 적용할 수 있다. 알파벳이 아닌 글자는 원래 글자 그대로 남아 있어야 한다. 예를 들어, "One is 1"을 ROT13으로 암호화하면 "Bar vf 1"이 된다.

문자열이 주어졌을 때, "ROT13"으로 암호화한 다음 출력하는 프로그램을 작성하시오. */





const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

let result = "";

for (let i = 0; i < input.length; i++) {
  const ch = input[i];

  // A-Z
  if (ch >= 'A' && ch <= 'Z') {
    const code = ch.charCodeAt(0) - 65;
    result += String.fromCharCode((code + 13) % 26 + 65);
    continue;
  }

  // a-z
  if (ch >= 'a' && ch <= 'z') {
    const code = ch.charCodeAt(0) - 97;
    result += String.fromCharCode((code + 13) % 26 + 97);
    continue;
  }


  result += ch;
}

console.log(result);


/* ROT13: 알파벳을 13글자 밀어 치환하는 치환 암호.
순차검색
A ↔ N, B ↔ O, … M ↔ Z, 소문자도 동일 규칙.

알파벳만 변환, 그 외 문자(숫자, 공백, 기호, 한글 등)는 그대로 둠.

ROT13을 두 번 적용하면 원문으로 돌아옴(자기역함수).

입력: 한 줄 문자열(길이 ≤ 100).

출력: 그 문자열을 ROT13으로 변환한 결과 

아스키 코드를 이용해서 대문자 소문자별로 처리. 인덱스로 계산하기위해 A의 값을빼주고 계산 후 원상복구 루틴"
시간복잡도 on */




