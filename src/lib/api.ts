// src/lib/api.ts
const API_URL = "http://localhost:3000/api";

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
