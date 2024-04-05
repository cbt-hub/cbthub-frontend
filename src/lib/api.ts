// src/lib/api.ts
const API_URL = "http://localhost:3000/api";

export async function fetchCategories() {
  try {
    const response = await fetch(`${API_URL}/v1/categories`);
    console.log(`${API_URL}/v1/categories: ${API_URL}/v1/categories`);

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
