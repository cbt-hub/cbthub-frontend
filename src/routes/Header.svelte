<script>
  import { page } from "$app/stores";

  /**
   * 일단 반응형을 할 것이지만, 반응형을 하기엔 시간 소모가 너무 크다.
   * 만들거 만들고 그래야할듯.
	 * TODO: 1. CBTHUB 로고 - 이걸 누르면 HOME으로 이동 - HOME에선 카테고리가 뜨고, 카테고리를 누르면 해당 카테고리로 이동한다.
	 * TODO: 2. 검색창 - 검색어를 입력하여 전체 검색
	 * TODO: 3. 마이페이지 및 로그인 버튼 - 로그인, 프로필, 로그보기 등 가능
	 * @link https://finviz.com/
	 * - header는 딱 이런 느낌으로 하면 될듯. 
	*/
</script>

<header>
  <div class="header-container flex items-center px-20 bg-gray-50">
    <div class="left-side py-2">
      <div class="logo flex items-center text-4xl py-2">
		<p class="logo text-6xl">cbthub</p>
	  </div>
      <div class="search">
		<div class="flex items-center">
			<form class="flex border-2 rounded-3xl items-center bg-white px-4 relative shadow-sm">
				<i class="fa-solid fa-magnifying-glass text-xl px-2 absolute right-2 text-slate-500"></i>
				<input type="text" class="px-2 py-2" placeholder="자격증 검색.." />
			</form>
		</div>
	  </div>
    </div>
    <div class="right-side">
      <div class="me">
		<i class="fa-solid fa-user text-2xl"></i>
	  </div>
    </div>
  </div>
</header>

<style>
	.header-container {
		justify-content: space-between;
	}
</style>
