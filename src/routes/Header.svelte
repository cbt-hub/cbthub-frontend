<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  function navigateToMe() {
    goto("/login");
  }

  onMount(() => {
    // form 요소와 input 요소 선택
    const formElement = document.querySelector("form");
    const inputElement = document.querySelector("input");

    // input 요소에 포커스가 있을 때 form의 스타일 변경
    inputElement?.addEventListener("focus", () => {
      formElement?.classList.add("border-blue-400", "border-2"); // 포커스 스타일 추가
    });

    // input 요소에서 포커스가 사라질 때 form의 스타일 복원
    inputElement?.addEventListener("blur", () => {
		formElement?.classList.remove("border-blue-400", "border-2");
      formElement?.classList.add("border-2"); // 포커스 스타일 제거
    });
  });
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
      <button
        class="me h-12 w-12 rounded-full border-2 border-gray-400 flex justify-center items-center"
        on:click={navigateToMe}
      >
        <i class="fa-solid fa-user text-2xl text-gray-500"></i>
      </button>
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
