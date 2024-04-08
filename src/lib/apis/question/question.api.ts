import { API_URL } from "../api";

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
