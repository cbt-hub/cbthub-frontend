import { API_URL } from "../api";

/**
 * @description Round ID에 해당하는 단일 문제를 가져오는 API
 */
export async function fetchQuestion(id: string): Promise<ApiResponse> {
  const token = localStorage.getItem("access_token"); // 'auth_token'을 실제 토큰이 저장된 키로 변경하세요.

  let response: any;

  if (!token) {
    response = await fetch(`${API_URL}/v1/rounds/${id}/question`, {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    });
  } else {
    response = await fetch(`${API_URL}/v1/rounds/${id}/question`, {
      method: "GET",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

/**
 * @description 정답 제출 API
 */
export async function solveQuestion(
  questionId: string,
  questionDetailsId: string
): Promise<any> {
  console.log("questionId", questionId);
  console.log("questionDetailsId", questionDetailsId);

  const token = localStorage.getItem("access_token");
  if (!token) {
    throw new Error("access_token is not found");
  }
  const response = await fetch(`${API_URL}/v1/questions/${questionId}/solve`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      questionDetailsId: questionDetailsId,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
