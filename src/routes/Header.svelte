<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/cbthub-logo.svg";

  /**
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
		<img src={logo} alt="CBTHUB" />
	  </div>
      <div class="search"></div>
    </div>
    <div class="right-side">
      <div class="me"></div>
    </div>
  </div>
</header>

<style>
	.logo {
		width: 10rem;
	}
	img {
		width: 100%;
		height: auto;
	}
</style>
