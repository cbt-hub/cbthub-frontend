<script lang="ts">
  import { goto } from "$app/navigation";
  import { verifyToken } from "$lib/api";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  type LoginState = {
    isValid: boolean;
    uuid?: string;
  } | null;

  const loginState = writable<LoginState>(null);

  onMount(async () => {
    /**
     * @description accessToken 유효성 검사
     */
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      const { isValid, uuid } = await verifyToken(accessToken);
      loginState.set({ isValid, uuid }); // 로그인 상태 업데이트
    } else {
      loginState.set({ isValid: false }); // 토큰이 없는 경우 로그인 상태를 false로 설정
    }

    /**
     * @description 검색창에 포커스가 되었을 때, 테두리 스타일을 추가하고 포커스가 해제되면 제거합니다.
     */
    const formElement = document.querySelector("form");
    const inputElement = document.querySelector("input");

    inputElement?.addEventListener("focus", () => {
      formElement?.classList.add("border-blue-400", "border-2"); // 포커스 스타일 추가
    });

    inputElement?.addEventListener("blur", () => {
      formElement?.classList.remove("border-blue-400", "border-2");
      formElement?.classList.add("border-2"); // 포커스 스타일 제거
    });
  });

  function navigateToMe() {
    goto("/me");
  }

  function navigateToLogin() {
    goto("/login");
  }
</script>

<header>
  <div
    class="header-container flex items-center px-20 bg-gray-50 justify-between mb-6"
  >
    <div class="left-side py-2 flex items-center">
      <div class="logo flex items-center text-4xl py-2">
        <p class="logo text-6xl"><a href="/">cbthub</a></p>
      </div>
      <div class="search mx-10">
        <div class="flex items-center">
          <form
            class="flex border-2 rounded-3xl items-center bg-white px-4 pl-7 relative shadow-sm w-64"
          >
            <i
              class="fa-solid fa-magnifying-glass text-xl px-2 absolute right-2 text-slate-500"
            ></i>
            <input type="text" class="px-2 py-2" placeholder="자격증 검색.." />
          </form>
        </div>
      </div>
    </div>
    <div class="right-side">
      {#if $loginState === null}
        <!-- 로그인 상태 확인 중 아무 것도 표시하지 않음 -->
      {:else if $loginState.isValid}
        <!-- 로그인 상태가 확인되었을 때 버튼 표시 -->
        <button
          class="me h-12 w-12 rounded-full border-2 border-gray-400 flex justify-center items-center"
          on:click={navigateToMe}
        >
          <i class="fa-solid fa-user text-2xl text-gray-500"></i>
        </button>
      {:else}
        <!-- 로그인 되지 않은 상태에서 '로그인' 버튼 표시 -->
        <button
          class="login h-12 px-4 rounded-full border-2 border-gray-400 flex justify-center items-center"
          on:click={navigateToLogin}
        >
          로그인
        </button>
      {/if}
    </div>
  </div>
</header>

<style>
  a:hover {
    text-decoration: none; /* 기본적인 텍스트 밑줄 제거 */
    color: inherit; /* 링크의 색상을 hover 시에도 변경하지 않음 */
  }
  input:focus {
    outline: none;
  } /* outline 테두리 없애기 */
</style>
