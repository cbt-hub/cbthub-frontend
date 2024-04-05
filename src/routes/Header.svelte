<script lang="ts">
	import { goto } from '$app/navigation';
  
	function navigateToMe() {
	  goto('/me');
	}
  </script>

<header>
  <div class="header-container flex items-center px-20 bg-gray-50 justify-between mb-6">
    <div class="left-side py-2 flex items-center">
      <div class="logo flex items-center text-4xl py-2">
		<p class="logo text-6xl" ><a href="/">cbthub</a></p>
	  </div>
      <div class="search mx-10">
		<div class="flex items-center">
			<form class="flex border-2 rounded-3xl items-center bg-white px-4 pl-7 relative shadow-sm w-64">
				<i class="fa-solid fa-magnifying-glass text-xl px-2 absolute right-2 text-slate-500"></i>
				<input type="text" class="px-2 py-2" placeholder="자격증 검색.." />
			</form>
		</div>
	  </div>
    </div>
    <div class="right-side">
      <button class="me" on:click={navigateToMe}>
		<i class="fa-solid fa-user text-2xl"></i>
	  </button>
    </div>
  </div>
</header>

<style>
	a:hover {
    text-decoration: none; /* 기본적인 텍스트 밑줄 제거 */
    color: inherit; /* 링크의 색상을 hover 시에도 변경하지 않음 */
  }
</style>
