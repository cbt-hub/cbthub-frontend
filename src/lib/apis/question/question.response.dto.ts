interface ApiResponse {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  details: Detail[];
  explains: Explain[];
}

interface Detail {
  id: number;
  choice: string;
  isCorrect: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

// Explain 인터페이스를 정의합니다.
interface Explain {
  id: number;
  type: string;
  explain: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  // 여기서는 question을 옵셔널 프로퍼티로 정의합니다. 모든 설명이 question 객체를 포함하지 않을 수 있기 때문입니다.
  question?: Question;
}

// Question 인터페이스를 정의합니다. ApiResponse와 유사한 구조를 가질 수 있습니다.
interface Question {
  id: number;
  title: string;
  content: string;
  image?: string; // image 필드는 있을 수도 있고 없을 수도 있으므로, 옵셔널로 정의합니다.
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
