<script lang="ts">
  import { join } from "$lib/api";

	let email = '';
	let password = '';
	let nickname = '';
	let passwordCheck = '';

	async function handleJoin(e: SubmitEvent) {
		e.preventDefault();
		try {
			const data = await join(email, password, nickname);
			console.log('회원가입 성공:', data);
			// TODO: 로그인 성공 처리
		} catch (error) {
			console.error((error as Error).message);
			// TODO: 실패 로직 처리
		}
	}
</script>

<svelte:head>
	<title>cbthub - 회원 가입</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column flex justify-center flex-col items-center h-full mt-40">
	<h1 class="text-2xl mb-5 w-72">계정 만들기</h1>
	<div class="flex justify-center">
		<form on:submit={handleJoin} class="flex justify-center flex-col w-72 items-center">
			<input type="email" bind:value={email} placeholder="이메일 주소" class="input-box rounded-lg p-3 mb-1 border-2 w-72">
			<input type="nickname" bind:value={nickname} placeholder="닉네임" class="input-box rounded-lg p-3 mb-1 border-2 w-72">
			<input type="password" bind:value={password} placeholder="비밀번호" class="input-box rounded-lg p-3 mb-1 border-2 w-72">
			<input type="password" bind:value={passwordCheck} placeholder="비밀번호 확인" class="input-box rounded-lg p-3 mb-1 border-2 w-72">
			<button type="submit" class="mb-4 bg-sky-300 text-gray-50 rounded-lg p-3 border-2 w-72">회원 가입</button>
		</form>
	</div>
</div>

<style>
</style>