// index.html에서 가장 먼저 불러오는 JS - index.ts
// -> ts파일은 js파일로 컴파일 후 dist폴더에 bundle.js로 배포

// 외부 ts 파일 불러오기
import {
  // 개발자 정보 배열
  devTeam,
  // 활동 중인 개발자 필터링 함수
  getActiveDevelopers,
  // 특정 기술을 가는 개발자 필터링 함수
  findBySkill,
  // 특정 역할을 가진 개발자 필터링 함수
  findByRole,
} from "./devTeam";

function greet(name: string): string {
  return `안녕, ${name}~!`;
}

console.log(greet("찐친 개발자"));
console.log(greet("코딩 마스터"));
console.log(greet("AI 전문가"));
console.log(greet("프로그래머"));

// 1. 기본 타입 선언
const userName: string = "김상중하";
const age: number = 20;
const isActive: boolean = true;

console.log("기본타입");
console.log(userName, age, isActive);

// 2. 배열 타입 선언
const numbers: number[] = [1, 2, 3, 4];
const names: string[] = ["김상중하", "코딩 마스터", "프로그래머"];

console.log("배열타입");
console.log(numbers);
console.log(names);

// 3. 튜플(Tuple) 타입 선언
const userInfo: [string, number] = ["김상중하", 20];

console.log("튜플타입");
console.log(userInfo);

// 4. 유니온 타입 선언
const unionType: "Loading" | "Success" | "Error" = "Loading";

console.log("유니온타입");
console.log(unionType);

// 5. 객체 타입 선언
type User = {
  name: string;
  age: number;
  isActive?: boolean; // 선택형 속성처리
};

// 위에 데이터 형을 적용한 새로운 변수선언 할당
const user1: User = {
  name: "Alice",
  age: 25,
};

const user2: User = {
  name: "Bob",
  age: 30,
  isActive: true,
};

const user3: User = {
  name: "Charlie",
  age: 35,
  isActive: false,
};

console.log("객체타입");
console.log(user1);
console.log(user2);
console.log(user3);

// 6. 함수의 타입 선언
function sayGoodBye(
  name: string,
  isOpt: boolean,
  message?: string // 선택적 매개변수는 맨 끝에 위치하기
): string {
  return `${name}! ${message ? message : ""} ${isOpt ? "잘가" : "안녕"}`;
}

console.log("함수타입");
console.log(sayGoodBye("김상중하", true));
console.log(sayGoodBye("코딩 마스터", false));
console.log(sayGoodBye("프로그래머", false, "우리나라"));

// 7. void 함수: 리턴 값이 없는 함수
function logMessage(name: string): void {}

console.log("void 함수");
logMessage("김상중하");
logMessage("코딩 마스터");
logMessage("프로그래머");

// 8. 인터섹션 타입 선언
type Employee = {
  name: string;
  company: string;
};

// 인터섹션 타입을 적용한 새로운 변수선언 할당
const employee1: Employee = {
  name: "Alice",
  company: "Google",
};

const employee2: Employee = {
  name: "Bob",
  company: "Microsoft",
};

console.log("인터섹션타입");
console.log(employee1);
console.log(employee2);

// 인터섹션을 다른 방식으로 만들기: 학생의 이름 / 집 / 나이
type StudentName = { name: string };
type StudentHome = { home: string };
type StudentAge = { age: number };

// 개별 type을 하나의 타입으로 합치기
type StudentInfro = StudentName & StudentHome & StudentAge;

// 결국 인터섹션은 타입을 여러개 동시에 적용하는 것

const student1: StudentInfro = {
  name: "Alice",
  home: "Seoul",
  age: 20,
};

const student2: StudentInfro = {
  name: "Bob",
  home: "Busan",
  age: 21,
};

console.log("인터섹션타입");
console.log(student1);
console.log(student2);

// 개발자 회사 샘플 찍어보기

console.log("개발자 회사 샘플");
console.log("전체 개발자 리스트:", devTeam);

console.log("frontend 개발자 리스트:");
console.log(findByRole(devTeam, "Frontend"));
console.log("backend 개발자 리스트:");
console.log(findByRole(devTeam, "Backend"));
console.log("fullstack 개발자 리스트:");
console.log(findByRole(devTeam, "Fullstack"));

console.log("활동 중인 개발자 리스트:");
console.log(getActiveDevelopers(devTeam));

console.log("TypeScript을 사용한 개발자 리스트:");
console.log(findBySkill(devTeam, "TypeScript"));