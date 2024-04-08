// src/lib/api.ts
export const API_URL = "http://localhost:3000/api";

/**
 * @description 카테고리를 단일 조회한다.
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

/**
 * @description 카테고리 목록을 조회한다.
 */
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

/**
 * @description 카테고리별 라운드 정보를 가져온다.
 */
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

/**
 * @description 로그인
 */
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

/**
 * @description 토큰 유효성 검사
 * @return 토큰이 유효하면 valid, uuid를 반환한다.
 */
export async function verifyToken(accessToken: string | null) {
  try {
    const response = await fetch(`${API_URL}/v1/auth/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (data.valid) {
      console.log(`token is valid: ${data.decoded.uuid}`);

      return { isValid: true, uuid: data.decoded.uuid };
    } else {
      console.log(`token is invalid`);

      return { isValid: false };
    }
  } catch (error) {
    console.error("토큰 검증 중 오류가 발생했습니다.", error);
    return { isValid: false };
  }
}

/**
 * @description 로그인 권한이 필요할 때 이 함수로 API를 호출한다.
 */
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

/**
 * @description 회원가입
 */
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
