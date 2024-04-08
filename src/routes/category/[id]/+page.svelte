<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { fetchCategory, fetchCategoryRounds } from "$lib/apis/api";

  let rounds: any = [];
  let category: any = {};
  let categoryId = "";

  $: categoryId = $page.params.id;

  onMount(async () => {
    if (categoryId) {
      rounds = await fetchCategoryRounds(categoryId);
      category = await fetchCategory(categoryId);
    }
  });

  function navigateToRoundDetail(roundId: string) {
    goto(`/round/${roundId}`);
  }
</script>

<svelte:head>
  <title>cbthub - category</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="flex justify-center flex-col">
  <div><h1 class="text-4xl">{category.name}</h1></div>
  <div class="m-14 flex justify-center">
    {#if rounds.length > 0}
      <table class="text-xl text-gray-600">
        <thead>
          <tr>
            <th class="p-2">회차</th>
            <th class="p-2">개최일</th>
            <th class="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {#each rounds as round}
            <tr>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <td class="p-1 pr-8"><a href="#" on:click={() => navigateToRoundDetail(round.id)}>{round.name}</a></td>
              <td class="p-1 pr-8">{new Date(round.heldAt).toLocaleDateString()}</td>
              <td class="p-1 pr-8">{round.progressRate ?? ""}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {:else}
      <p>No rounds available for this category.</p>
    {/if}
  </div>
</div>
