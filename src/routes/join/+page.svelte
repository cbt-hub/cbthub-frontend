<script lang="ts">
  import { goto } from "$app/navigation";
  /**
   * TODO: GPT처럼 이메일 및 닉네임 입력 -> 비밀번호 입력
   * TODO: 이메일 인증 시스템 추가하기
   * TODO: 패스워드 체크 기능 만들기
   */
  import { join } from "$lib/apis/api";

  let email = "";
  let password = "";
  let nickname = "";
  let passwordCheck = "";

  async function handleJoin(e: SubmitEvent) {
    e.preventDefault();
    try {
      //TODO: 로그인 페이지로 리다이렉트가 아니라, 홈으로 가면서 자동으로 로그인
      const data = await join(email, password, nickname);
      console.log("회원가입 성공:", data);
      goto('/login');
    } catch (error) {
      //TODO: 에러 메시지를 사용자에게 보여주기
      console.error((error as Error).message);
      (document.querySelector(".error") as HTMLElement).textContent = (
        error as Error
      ).message;
    }
  }
</script>

<svelte:head>
  <title>cbthub - 회원 가입</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column flex justify-center flex-col items-center h-full mt-40">
  <h1 class="text-2xl mb-5 w-72">계정 만들기</h1>
  <div class="flex justify-center flex-col">
    <form
      on:submit={handleJoin}
      class="flex justify-center flex-col w-72 items-center"
    >
      <input
        type="email"
        bind:value={email}
        placeholder="이메일 주소"
        class="input-box rounded-lg p-3 mb-1 border-2 w-72"
      />
      <input
        type="nickname"
        bind:value={nickname}
        placeholder="닉네임"
        class="input-box rounded-lg p-3 mb-1 border-2 w-72"
      />
      <input
        type="password"
        bind:value={password}
        placeholder="비밀번호"
        class="input-box rounded-lg p-3 mb-1 border-2 w-72"
      />
      <input
        type="password"
        bind:value={passwordCheck}
        placeholder="비밀번호 확인"
        class="input-box rounded-lg p-3 mb-1 border-2 w-72"
      />
      <button
        type="submit"
        class="mb-4 bg-sky-300 text-gray-50 rounded-lg p-3 border-2 w-72"
        >회원 가입</button
      >
    </form>
    <p class="error w-72 text-red-500 text-sm"></p>
  </div>
</div>

<style>
</style>
