// JS3-1. 제어문 JS code //

// 본 파일 로딩 확인
console.log("제어문 테스트");

// 1. if문 처리를 위한 함수 만들기
/***************************************
함수명: showScore
기능: 점수에 따른 평가를 출력
1. 점수에 따른 평가 메세지 출력
2. 점수에 따른 메세지 글자색 변경
3. 점수에 따른 칭찬 스티커 보이기

***************************************/

// 이름있는 함수를 선언적 함수라고 한다
function showScore(){
// 1. 함수 호출 확인
console.log("평가 확인");

// 2. 대상선정 //
// 2-1. 점수 입력 요소: input#Score
var score = document.querySelector('#score');

//2-2. 출력요소: #score
var jexp = document.querySelector('.jexp');

//칭찬스티커 요소: .jshow
var jshow  = document.querySelector('.jshow');

console.log("선택요소: ", score, jexp, jshow);

// 3. 점수 입력값 읽어오기
var score = score.value;
// value 속성 = 입력된 input 값을 읽어오는 속성
console.log("입력된 값: ", score);

// 4. 점수에 따른 분기하여 결과 출력 //////
// if/else if를 사용하면 구간 설정 불필요

// 평가 텍스트 변수 셋팅
var expText = "";
// 평가결과 글자색 변수
var expColor = "";
// 칭찬스티커 위치값 변수
var jshowPos = "";

// 4-1. 90점 이상 : 매우잘함
if(score >= 90){
    expText = "매우잘함";
    expColor = "blue";
    jshowPos = "100% 50%";
}
// 4-2. 80점 이상 : 잘함
else if(score >= 80){
    expText = "잘함";
    expColor = "green";
    jshowPos = "0% 100%";
}
// 4-3. 70점 이상 : 보통
else if(score >= 70){
    expText = "보통";
    expColor = "purple";
    jshowPos = "50% 50%";
}
// 4-4. 60점 이상 : 노력요함
else if(score >= 60){
    expText = "노력요함";
    expColor = "orange";
    jshowPos = "100% 100%";
}
// 4-5. 60점 미만 : 재시험
else{
    expText = "재시험";
    expColor = "red";
    jshowPos = "100% 0%";
}

// 5. 화면출력 변경하기
// 5-1. 텍스트 변경하기
jexp.innerText = "평가결과는 " + expText;
// 5-2. 글자색 변경하기
jexp.style.color = expColor;
// 5-3. 칭찬스티커 변경하기
jshow.style.backgroundPosition = jshowPos;

/*************************************** 
     [ if문 ]
    - 조건문을 검사하여 true이면
    중괄호안의 코드가 실행되는 제어문

    - 조건문이란 
    결과가 true / false 로 나오는 구문
    (조건문: 비교연산자, 논리연산자)

    ((구문))
    ____________________________

    if(조건문){
        실행코드
    }
    else if(조건문){
        실행코드
    }
    ...
    else{
        실행코드
    }
    ______________________________

    ((구문해석))
    1. if문은 단독으로 따로 사용가능

    2. else if문은 if문 뒤에 또는 else if문 뒤에
    만 사용가능함!(else if로 시작못함!)
    -> 하나의 조건에 걸리면 다른 조건문엔 안들어감!
    -> 단독으로 else if문 사용불가!

    3. else문은 모든 조건에 해당없을때
    무조건 실행할 코드가 있을 경우 사용한다!
    -> if문 가장 끝에 사용한다!
    -> 단독으로 else문만 사용불가!

    ※ 참고 : if문의 실행문이 하나이면 중괄호생략가능
    예) 
        if(aa>10){
            my = "ㅎㅎㅎ";
        }

        -> 위와 같음

        if(aa>10) my = "ㅎㅎㅎ";
    ***************************************/

}// showScore() end