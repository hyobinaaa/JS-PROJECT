// variable(변수 만드는법)

// let 과 const에 차이점
// const 절대 변하지 않는 데이터 타입이라서 아래 구문에서 바꿀려고 해도 바꿀수 없음
// 하지만 let 으로 선언을 하면 아래 구문에서 바꿀려고 하면 바꿀수 있다
// 결론 const 는 고정 , let 은 고정적이지 않음
const a = 5; // 변수 선언 방법 const는 상수를 의미
const b = 4;
let Myname = "leehyobin"; // 변수가 고정적이지 않을수 있음

console.log(a + b); // 콘솔로 메세지 보내기 (콘솔에 log, print(괄호안에는 숫자나 문자))
console.log(a / b); // a는 5를 의미
console.log(a * b); // ;;

Myname = "hyobin" // 변수 업데이트 함

console.log("hello " + Myname);


