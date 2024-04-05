<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { fetchCategoryRounds } from "$lib/api";
  
	let rounds: any = [];
	let categoryId = "";
  
	$: categoryId = $page.params.id;
  
	onMount(async () => {
	  if (categoryId) {
		rounds = await fetchCategoryRounds(categoryId);
	  }
	});
  
	function navigateToRoundDetail(roundId: string) {
	  // 필요한 경우 사용, 각 round 상세 페이지로 이동하는 예시
	  goto(`/category/${categoryId}/round/${roundId}`);
	}
  </script>
  
  <h1>Category {categoryId} Rounds</h1>
  {#if rounds.length > 0}
	<table>
	  <thead>
		<tr>
		  <th>Name</th>
		  <th>Held At</th>
		  <th>Progress Rate</th>
		  <!-- 필요한 다른 헤더 추가 -->
		</tr>
	  </thead>
	  <tbody>
		{#each rounds as round}
		  <tr>
			<td>{round.name}</td>
			<td>{new Date(round.heldAt).toLocaleDateString()}</td>
			<td>{round.progressRate ?? "N/A"}</td>
			<!-- 필요한 다른 셀 추가 -->
		  </tr>
		{/each}
	  </tbody>
	</table>
  {:else}
	<p>No rounds available for this category.</p>
  {/if}
  