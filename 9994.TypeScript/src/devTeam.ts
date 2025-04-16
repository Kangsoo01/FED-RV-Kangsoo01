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

// 참고: 타입은 파스칼케이스로 정의하고 export로 개별적 내보내기가 가능하다

// 1. 역할을 나타내는 타입 정의 + 내보내기
export type Role = 'Frontend' | 'Backend' | 'Fullstack';

// 2. 개발자 정보를 나타내는 타입 정의
// 각 개발자는 이름(name), 나이(age), 역할(role), 
// 스킬(skills), 활동상태(isActive)를 가진다

export type Developer = {
    // 개발자의 이름
    name: string;
    // 개발자의 나이
    age: number;
    // 개발자의 역할 (Frontend, Backend, Fullstack)
    role: Role;
    // 개발자가 보유한 스킬 목록
    skills: string[];
    // 개발자의 활동 상태
    isActive: boolean;
};

// 3. 개발자 정보 셋팅: 배열 객체 
export const devTeam: Developer[] = [
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
]

// 4. 활동 중인 개발자 필터링 함수정의
// -> team 파라미터 변수에 devTeam 배열을 받아서
// 배열값의 객체속성 중 isActive 속성값이 true인 개발자들만 변환
export function getActiveDevelopers(team: Developer[]): Developer[] {
    return team.filter(dev => dev.isActive);
}

// 5. 특정 기술을 가는 개발자 필터링 함수정의
// -> team 파라미터 변수에 devTeam 배열을 받아서
// 배열값의 객체속성 중 skills 속성값 중 해당 기술이 있는 개발자들만 변환
export function findBySkill(team: Developer[], skill: string): 
Developer[] {
    return team.filter(dev => dev.skills.includes(skill));    
}

// 6. 특정 역할을 가진 개발자 필터링 함수 정의
// -> team 파라미터 변수에 devTeam 배열을 받아서
// 배열값의 객체속성 중 role 속성값이
// 파라미터로 받은 role과 같은 개발자들만 변환
export function findByRole(team: Developer[], role: Role): 
Developer[] {
    return team.filter(dev => dev.role === role);    
}