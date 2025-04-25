// 파이어베이스 설정 파일
// Firebase SDK를 사용하기 위해서는 
// Firebase Console에서 프로젝트를 생성하고 설정을 받아야 합니다.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIU7M4IuCo0PrQTC_Qfye-M4j4UON6Dy8",
    authDomain: "react-firebase-app-4c4cc.firebaseapp.com",
    projectId: "react-firebase-app-4c4cc",
    storageBucket: "react-firebase-app-4c4cc.firebasestorage.app",
    messagingSenderId: "405331663393",
    appId: "1:405331663393:web:6e5f3fe574cfbca9566160"
  };

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
// initializeApp은 Firebase 앱을 초기화하는 함수입니다.
// Firebase 앱을 초기화하면 Firebase 서비스에 접근할 수 있습니다.

// 파이어베이스 DB연결하여 가져오기
export const db = getFirestore(app);
// getFirestore는 Firestore 데이터베이스에 대한 인스턴스를 가져오는 함수입니다.
// Firestore는 Firebase의 NoSQL 클라우드 데이터베이스입니다.
// 이것만 내보내면 내가 만든 DB와 연결하여 테이블을 사용할 수 있다!

