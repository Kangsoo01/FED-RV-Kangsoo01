/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/devTeam.ts":
/*!************************!*\
  !*** ./src/devTeam.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


/**************************************
🧩 실습 주제: “우리 개발팀 인력 관리 시스템”
🧪 주요 학습 포인트
TypeScript 기본 타입 정리
인터페이스 / 타입 별칭 활용
유니온, 인터섹션, 튜플, enum 실전 적용
함수 선언 및 타입 지정
배열과 객체의 타입 구조 연습


💼 시나리오 설정
"웹개발 회사의 개발자 인력을 정리하고 관리하는 시스템을
만든다."
예제 컨셉
Developer 라는 타입을 만들어서 다양한 개발자들을 표현

개발자들은 각자 역할(Frontend, Backend, Fullstack),
스킬, 프로젝트 참여 여부 등 정보 가짐
이 정보를 배열로 관리하고, 필터링하거나 콘솔에 출력
타입 안정성 유지하면서 함수도 타입화함


📖 데이터 및 함수 정의
Role: 개발자의 역할을 정의한 타입으로,
"Frontend", "Backend", "Fullstack" 중
하나만 가능합니다.
이 타입은 개발자 객체에서 role에 사용됩니다.

((타입정의))
Developer: 개발자에 대한 정보를
나타내는 타입으로,
이름, 나이, 역할, 기술, 활동 여부 등의
속성을 가집니다.

((타입정의))
devTeam: 개발자 배열로, 여러 명의 개발자
정보를 포함하고 있습니다.
각 개발자는 Developer 타입을 따릅니다.

((함수정의))
getActiveDevelopers: 활동 중인 개발자만
추출하는 함수로,
isActive 속성이 true인 개발자들만 반환합니다.

((함수정의))
findBySkill: 특정 기술(skill)을 가진
개발자들만 추출하는 함수로,
각 개발자의 skills 배열에 주어진 기술이
포함된 경우만 반환합니다.

**************************************/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.devTeam = void 0;
exports.getActiveDevelopers = getActiveDevelopers;
exports.findBySkill = findBySkill;
exports.findByRole = findByRole;
// 3. 개발자 정보 셋팅: 배열 객체 
exports.devTeam = [
    {
        name: 'John Doe',
        age: 25,
        role: 'Frontend',
        skills: ['HTML', 'CSS', 'JavaScript'],
        isActive: true
    },
    {
        name: 'Jane Doe',
        age: 30,
        role: 'Backend',
        skills: ['Python', 'Django', 'Java'],
        isActive: false
    },
    {
        name: 'Bob Smith',
        age: 28,
        role: 'Fullstack',
        skills: ['React', 'Node.js', 'Express'],
        isActive: true
    },
    {
        name: 'Alice Johnson',
        age: 22,
        role: 'Frontend',
        skills: ['React', 'Redux', 'Sass'],
        isActive: true
    },
    {
        name: 'Mike Brown',
        age: 35,
        role: 'Backend',
        skills: ['Ruby', 'Rails', 'PostgreSQL'],
        isActive: false
    },
    {
        name: 'Emma Williams',
        age: 26,
        role: 'Fullstack',
        skills: ['Angular', 'TypeScript', 'GraphQL'],
        isActive: true
    },
    {
        name: 'Olivia Lee',
        age: 24,
        role: 'Frontend',
        skills: ['Vue', 'Vuex', 'Bulma'],
        isActive: true
    },
    {
        name: 'Liam Kim',
        age: 32,
        role: 'Backend',
        skills: ['Go', 'Gin', 'MongoDB'],
        isActive: false
    },
    {
        name: 'Noah White',
        age: 29,
        role: 'Fullstack',
        skills: ['Next.js', 'Prisma', 'Tailwind CSS'],
        isActive: true
    }
];
// 4. 활동 중인 개발자 필터링 함수정의
// -> team 파라미터 변수에 devTeam 배열을 받아서
// 배열값의 객체속성 중 isActive 속성값이 true인 개발자들만 변환
function getActiveDevelopers(team) {
    return team.filter(dev => dev.isActive);
}
// 5. 특정 기술을 가는 개발자 필터링 함수정의
// -> team 파라미터 변수에 devTeam 배열을 받아서
// 배열값의 객체속성 중 skills 속성값 중 해당 기술이 있는 개발자들만 변환
function findBySkill(team, skill) {
    return team.filter(dev => dev.skills.includes(skill));
}
// 6. 특정 역할을 가진 개발자 필터링 함수 정의
// -> team 파라미터 변수에 devTeam 배열을 받아서
// 배열값의 객체속성 중 role 속성값이
// 파라미터로 받은 role과 같은 개발자들만 변환
function findByRole(team, role) {
    return team.filter(dev => dev.role === role);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

// index.html에서 가장 먼저 불러오는 JS - index.ts
// -> ts파일은 js파일로 컴파일 후 dist폴더에 bundle.js로 배포
Object.defineProperty(exports, "__esModule", ({ value: true }));
// 외부 ts 파일 불러오기
const devTeam_1 = __webpack_require__(/*! ./devTeam */ "./src/devTeam.ts");
function greet(name) {
    return `안녕, ${name}~!`;
}
console.log(greet("찐친 개발자"));
console.log(greet("코딩 마스터"));
console.log(greet("AI 전문가"));
console.log(greet("프로그래머"));
// 1. 기본 타입 선언
const userName = "김상중하";
const age = 20;
const isActive = true;
console.log("기본타입");
console.log(userName, age, isActive);
// 2. 배열 타입 선언
const numbers = [1, 2, 3, 4];
const names = ["김상중하", "코딩 마스터", "프로그래머"];
console.log("배열타입");
console.log(numbers);
console.log(names);
// 3. 튜플(Tuple) 타입 선언
const userInfo = ["김상중하", 20];
console.log("튜플타입");
console.log(userInfo);
// 4. 유니온 타입 선언
const unionType = "Loading";
console.log("유니온타입");
console.log(unionType);
// 위에 데이터 형을 적용한 새로운 변수선언 할당
const user1 = {
    name: "Alice",
    age: 25,
};
const user2 = {
    name: "Bob",
    age: 30,
    isActive: true,
};
const user3 = {
    name: "Charlie",
    age: 35,
    isActive: false,
};
console.log("객체타입");
console.log(user1);
console.log(user2);
console.log(user3);
// 6. 함수의 타입 선언
function sayGoodBye(name, isOpt, message // 선택적 매개변수는 맨 끝에 위치하기
) {
    return `${name}! ${message ? message : ""} ${isOpt ? "잘가" : "안녕"}`;
}
console.log("함수타입");
console.log(sayGoodBye("김상중하", true));
console.log(sayGoodBye("코딩 마스터", false));
console.log(sayGoodBye("프로그래머", false, "우리나라"));
// 7. void 함수: 리턴 값이 없는 함수
function logMessage(name) { }
console.log("void 함수");
logMessage("김상중하");
logMessage("코딩 마스터");
logMessage("프로그래머");
// 인터섹션 타입을 적용한 새로운 변수선언 할당
const employee1 = {
    name: "Alice",
    company: "Google",
};
const employee2 = {
    name: "Bob",
    company: "Microsoft",
};
console.log("인터섹션타입");
console.log(employee1);
console.log(employee2);
// 결국 인터섹션은 타입을 여러개 동시에 적용하는 것
const student1 = {
    name: "Alice",
    home: "Seoul",
    age: 20,
};
const student2 = {
    name: "Bob",
    home: "Busan",
    age: 21,
};
console.log("인터섹션타입");
console.log(student1);
console.log(student2);
// 개발자 회사 샘플 찍어보기
console.log("개발자 회사 샘플");
console.log("전체 개발자 리스트:", devTeam_1.devTeam);
console.log("frontend 개발자 리스트:");
console.log((0, devTeam_1.findByRole)(devTeam_1.devTeam, "Frontend"));
console.log("backend 개발자 리스트:");
console.log((0, devTeam_1.findByRole)(devTeam_1.devTeam, "Backend"));
console.log("fullstack 개발자 리스트:");
console.log((0, devTeam_1.findByRole)(devTeam_1.devTeam, "Fullstack"));
console.log("활동 중인 개발자 리스트:");
console.log((0, devTeam_1.getActiveDevelopers)(devTeam_1.devTeam));
console.log("TypeScript을 사용한 개발자 리스트:");
console.log((0, devTeam_1.findBySkill)(devTeam_1.devTeam, "TypeScript"));

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map