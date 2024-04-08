<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import type { Page } from "@sveltejs/kit";
  import { fetchQuestion } from "$lib/apis/question/question.api";

  // `details`가 항상 배열이 되도록 초기값 설정
  let question: any = {
    details: [], // 여기서 `details`를 빈 배열로 초기화
  };

  onMount(async () => {
    const roundId = $page.params.id; // 현재 페이지의 roundId 가져오기
    if (roundId) {
      question = await fetchQuestion(roundId); // API 호출 결과를 question에 할당
    }
  });
</script>

<svelte:head>
  <title>cbthub - round</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="flex justify-center flex-col max-w-2xl">
  <div>
    <div class="flex items-center">
      <p class="text-3xl">{question.id}</p>
      <h1 class="text-2xl">{question.title}</h1>
    </div>

    <p>{question.content}</p>
    <ul>
      {#each question.details as detail, index (detail.id)}
        <li class="flex">
          <p>{index + 1}</p>
          <p>{detail.choice}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>
