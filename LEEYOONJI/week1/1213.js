const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase(); // 입력을 대문자로 변환하여 받음

function createPalindrome(name) {
  const alphabetCount = new Array(26).fill(0); // 알파벳 빈도수를 저장할 배열

  // 각 알파벳의 등장 횟수를 세어 배열에 저장
  for (let char of name) {
    alphabetCount[char.charCodeAt(0) - "A".charCodeAt(0)]++; // 'A'의 ASCII 값 기준으로 인덱스 계산
  }

  let halfPalindrome = ""; // 팰린드롬 절반을 구성할 문자열
  let oddCharacter = null; // 홀수 개의 알파벳이 있으면 중간에 위치할 문자

  // 각 알파벳의 등장 횟수를 확인하면서 팰린드롬의 절반을 구성
  for (let i = 0; i < 26; i++) {
    if (alphabetCount[i] % 2 === 1) {
      // 홀수 개 등장하는 알파벳이 있는 경우
      if (oddCharacter !== null) {
        // 홀수 개 알파벳이 2개 이상일 때는 팰린드롬 불가
        return "I'm Sorry Hansoo";
      }
      oddCharacter = String.fromCharCode("A".charCodeAt(0) + i); // 홀수 개 등장 알파벳을 저장
    }

    // 알파벳 등장 횟수의 절반을 이용하여 팰린드롬의 절반을 생성
    halfPalindrome += String.fromCharCode("A".charCodeAt(0) + i).repeat(
      alphabetCount[i] / 2
    );
  }

  // 팰린드롬 완성
  let palindrome = halfPalindrome; // 절반으로 구성된 팰린드롬 초기화
  if (oddCharacter !== null) {
    palindrome += oddCharacter; // 홀수 개 등장 알파벳이 있으면 중앙에 추가
  }
  palindrome += halfPalindrome.split("").reverse().join(""); // 절반을 뒤집어 끝에 추가하여 완전한 팰린드롬 생성
  return palindrome;
}

console.log(createPalindrome(input)); // 결과 출력
