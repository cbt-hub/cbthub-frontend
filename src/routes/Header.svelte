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
  <div class="header-container">
    <div class="left-side">
      <div class="logo">
		<p class="logo">cbthub</p>
	  </div>
      <div class="search"></div>
    </div>
    <div class="right-side">
      <div class="me"></div>
    </div>
  </div>
  

  <div class="max-w-sm rounded overflow-hidden shadow-lg p-5 bg-white">
	<img class="w-full" src="https://post-phinf.pstatic.net/MjAyMTA5MDhfMjI5/MDAxNjMxMDg2ODAzNDcz.3016NkIqr1r8lXuugfrHlKmwH4qSH_bLVUOuNcROteUg.HDxFlQuHOqV9uuWXvLAYYidpn2s7-obD544L9Dekt0kg.JPEG/k5qej1u8dy361.jpg?type=w800_q75" alt="Sunset in the mountains">
	<div class="px-6 py-4">
	  <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
	  <p class="text-gray-700 text-base">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
	  </p>
	</div>
	<div class="px-6 pt-4 pb-2">
	  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
		Read More
	  </button>
	</div>
  </div>
</header>

<style>
</style>
