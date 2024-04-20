export enum QuestionStatusEnum {
  SOLVED_CORRECT = "SOLVE_CORRECT", // 정답을 맞춘 상태
  SOLVED_WRONG = "SOLVE_WRONG", // 정답을 틀린 상태
  SOLVED_WRONG_CORRECT = "SOLVE_WRONG_CORRECT", // 정답을 틀렸다가 맞춘 상태
  SKIPPED = "SKIPPED", // 건너뛴 상태
}

export enum ExplainTypeEnum {
  NORMAL = "NORMAL",
  GPT3 = "GPT3",
  GPT4 = "GPT4",
  GEMINI = "GEMINI",
  CLOVA = "CLOVA",
}

interface QuestionStatusDto {
  id: number;
  status: QuestionStatusEnum;
  isLast: boolean;
  questionDetailsId: number;
  createdAt: Date;
  updatedAt: Date;
}

interface QuestionDetailsDto {
  id: number;
  choice: string;
  isCorrect: boolean;
}

interface QuestionExplainsDto {
  id: number;
  type: ExplainTypeEnum;
  explain: string;
}

interface GetQuestionRoundClickDtoV2 {
  id: number;
  title: string;
  content?: string;
  image?: string;
  order: number;
  createdAt: Date;
  details: QuestionDetailsDto[];
  explains: QuestionExplainsDto[];
  questionStatus?: QuestionStatusDto;
}

/**
 * @description Round 클릭 시, question 전체 조회
 */
export interface GetQuestionRoundClickDtos {
  questions: GetQuestionRoundClickDtoV2[];
  lastSolvedQId: number;
}
