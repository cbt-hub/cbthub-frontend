<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { fetchCategories, fetchCategoryRounds } from "../lib/api";

  let categories : any[] = [];
  let rounds : any[] = [];
  let selectedCategoryId: string | null = null;

  onMount(async () => {
    categories = await fetchCategories();
    console.log(categories);
  });

  function navigateToRound(id: string) {
    goto(`/category/${id}`);
  }
</script>

{#each categories as { id, name, createdAt }, index}
  <category class="category-card m-1">
    <div class="flex justify-center items-center text-center flex-col w-52">
      <button class="cat-img relative" on:click={() => navigateToRound(String(id))}>
        <img
          class="rounded-3xl border-gray-700 border-2 shadow-2xl w-52 h-52"
          src="https://cdn.pixabay.com/photo/2024/01/04/14/27/write-8487618_1280.jpg"
          alt="card-img"
        />
        <div class="overlay"></div>
        <div class="text-xl absolute bottom-0 text-gray-50 p-2 w-52">
          {name}
        </div>
      </button>
    </div>
  </category>
{/each}

<style>
  .cat-img .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 25%);
    border-radius: 24px; /* 이미지와 같은 border-radius 적용 */
  }
</style>
