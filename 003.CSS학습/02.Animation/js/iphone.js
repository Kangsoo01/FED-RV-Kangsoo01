// 아이폰 회전하기 : 따라보기 기능구현

// 요구사항 분석 : 아이폰이 x축, y축으로
// 앞에 분할된 영역에 오버시 해당 수치로
// 회전하여 마우스 포인터를 따라보게 한다!
// (CSS에서 마우스 포인터도 이미지로 바꿔준다!)

// 1-1. 이벤트 대상 : .evt-bx li
const target = document.querySelectorAll(".evt-bx li");

// 1-2. 변경대상: .iphone
const iphone = document.querySelector(".iphone");

// 2. 이벤트 설정하기 ////////////
// 요소개수 ////
const eleCnt = target.length;

console.log("대상요소:", target, eleCnt);

// 위치 배열값: x축값 = 5가지 / y축값 = 3가지
const yVal = [-60, -30, 0, 30, 60];
const xVal = [40, 0, -40];

// 개수 만큼 for문 돌려서 이벤트 설정하기 /////
// for(시;한;증){코드}
for (let i = 0; i < eleCnt; i++) {
  // x축값: 5가지
  // y축값: 3가지
  // 위에 값을 구체적으로 배열로 만든다
  // 그 배열값의 순번으로 조합하여 만들어준다
  // 각줄: xy, xy, xy, xy, xy
  // 첫번째줄: 00, 10, 20, 30, 40
  // 두번째줄: 01, 11, 21, 31, 41
  // 세번째줄: 02, 12, 22, 32, 42
  // let x1 = i>4?i-5:i;
  // 4보다 크면 5를 빼고, 아니면 i값 그대로 출력하기

  // 출력할 값 y축 변수
  let y1;
  // 9보다 크면 10을 빼고
  if (i > 9) y1 = i - 10;
  // 4보다 크면 5를 빼고
  else if (i > 4) y1 = i - 5;
  // 그밖에 경우는 i값 그대로
  else y1 = i;

  // 출력할 값 x축 변수
  let x1;
  // 9보다 크면 2
  if (i > 9) x1 = 2;
  // 4보다 크면 1
  else if (i > 4) x1 = 1;
  // 그밖에 경우는 0
  else x1 = 0;

  console.log("나돌아?", y1, x1);
  console.log("yVal", yVal[y1], "xVal", xVal[x1]);

  // 이벤트 설정하기
  // mouseenter는 대상요소 경계선 안으로 들어갈 때 발생
  target[i].onmouseenter = function () {
    console.log("마엔: ", i);
    // 변경대상인 아이폰의 style 트랜스폼 회전값 변경
    iphone.style.transform = `
    rotateX(${xVal[x1]}deg)
    rotateY(${yVal[y1]}deg)`;
  }; // mouseeter end
} //// for ////

// 처음에 .evt-bx가 display: none로 이므로
// 애니메이션 끝난 후 즉, 약 5초 후에 보이게 한다

setTimeout(function () {
  document.querySelector(".evt-bx").style.display = "block";
}, 5000);
