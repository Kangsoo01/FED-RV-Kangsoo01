function greet(name: string): string {
    return `안녕, ${name}~!`;
  }
  
  console.log(greet("찐친 개발자"));
  console.log(greet("코딩 마스터"));
  console.log(greet("AI 전문가"));
  console.log(greet("프로그래머"));

// 1. 기본 타입 선언
const userName: string = "김상중하";
const age:number = 20;
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
const userInfo : [string, number] = ["김상중하", 20];

console.log("튜플타입");
console.log(userInfo);

// 4. 유니온 타입 선언
const unionType: "Loading" | "Success" | "Error" = "Loading";

console.log("유니온타입");
console.log(unionType);

// 5. 객체 타입 선언
type User ={
  name: string;
  age: number;
  isActive?: boolean; // 선택형 속성처리
};

// 위에 데이터 형을 적용한 새로운 변수선언 할당
const user1: User = {
  name: "Alice",
  age: 25,
};

console.log("객체타입");
console.log(user1);