// src/lib/api.ts
const API_URL = "http://localhost:3000/api";

/**
 * 카테고리를 단일 조회한다.
 * - 그 카테고리에 맞는 round 정보를 가져온다.
 * @param categoryId
 * @returns
 */
export async function fetchCategory(categoryId: string) {
  try {
    const response = await fetch(`${API_URL}/v1/categories/${categoryId}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch(`${API_URL}/v1/categories`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

export async function fetchCategoryRounds(categoryId: string) {
  try {
    const response = await fetch(
      `${API_URL}/v1/categories/${categoryId}/rounds`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

export async function login(username: string, password: string): Promise<any> {
  const response = await fetch(`${API_URL}/v1/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("로그인 실패");
  }
}

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    console.error("Access Token이 없습니다. 로그인이 필요합니다.");
    throw new Error("로그인이 필요합니다.");
  }

  const headers = new Headers(options.headers || {});
  headers.append("Authorization", `Bearer ${accessToken}`);

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export async function join(
  username: string,
  nickname: string,
  password: string
): Promise<any> {
  const response = await fetch(`${API_URL}/v1/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      nickname: nickname,
      password: password,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("Failed to create user:", error.message);
    throw new Error(error.message.message);
  }

  const data = await response.json();
  console.log("User created:", data);
}
