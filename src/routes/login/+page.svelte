<script lang="ts">
  import { login } from "$lib/api";
  import { onMount } from "svelte";

	let email = '';
	let password = '';

	async function handleLogin(e: SubmitEvent) {
		e.preventDefault();
		try {
			const data = await login(email, password);
			console.log('로그인 성공:', data);
			// TODO: 로그인 성공 처리
		} catch (error) {
			console.error((error as Error).message);
			// TODO: 실패 로직 처리
		}
	}

	/**
	 * TODO:
	 * 1. input 박스 색상 변경
	 * 2. 비밀번호 찾기 기능
	 * 3. 약관
	 * 4. 소셜 로그인 연동
	*/
</script>

<svelte:head>
	<title>로그인 페이지</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column flex justify-center flex-col items-center h-full mt-40">
	<h1 class="text-2xl mb-5 w-72">다시 오신 것을 환영합니다!</h1>
	<div class="flex justify-center">
		<form on:submit={handleLogin} class="flex justify-center flex-col w-72 items-center">
			<input type="email" bind:value={email} placeholder="이메일 주소" class="input-box rounded-lg p-3 mb-1 border-2 w-72">
			<input type="password" bind:value={password} placeholder="비밀번호" class="input-box rounded-lg p-3 mb-1 border-2 w-72">
			<p class="text-left w-full my-4 text-sm text-sky-400">비밀번호를 잊어버리셨나요?</p>
			<button type="submit" class="mb-4 bg-sky-300 text-gray-50 rounded-lg p-3 border-2 w-72">로그인</button>
		</form>
	</div>
	<p class="text-sm">계정이 없으신가요?<a class="pl-2 text-sky-400" href="/signin">가입하기</a></p>
</div>

<style>
</style>