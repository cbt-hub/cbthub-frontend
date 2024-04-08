<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import {
    fetchQuestion,
    solveQuestion,
  } from "$lib/apis/question/question.api";

  let question: any = {
    details: [],
    explains: [],
  };
  let roundId: string = "";
  let selectedDetailId: string | null = null; // 선택된 detail의 ID를 저장하는 상태

  onMount(async () => {
    roundId = $page.params.id;
    if (roundId) {
      question = await fetchQuestion(roundId);
    }
  });

  // detail 선택 이벤트 핸들러
  function selectDetail(detailId: string): void {
    selectedDetailId = detailId; // 선택된 detail의 ID를 저장
  }

  // 사용자가 정답 확인 버튼을 클릭했을 때, 정답을 확인합니다.
  async function checkAnswer(): Promise<void> {
    console.log(`정답 확인 : ${question.id}, ${selectedDetailId}`);
    
    if (!selectedDetailId) return;
    try {
      const result = await solveQuestion(question.id, selectedDetailId);
      console.log(result);
    } catch (error) {
      console.error("정답 확인 중 오류가 발생했습니다:", error);
    }
  }
</script>

<svelte:head>
  <title>cbthub - round</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="flex justify-center flex-col max-w-2xl mt-16">
  <div class="question-container mb-8">
    <div class="flex items-center mb-4">
      <p class="text-2xl text-blue-400 mr-2">{question.id}.</p>
      <h1 class="text-2xl">{question.title}</h1>
    </div>

    <p class="border-2 p-4 mb-4">{question.content}</p>
    <ul>
      {#each question.details as detail, index (detail.id)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li
          class="flex items-center pr-1 py-1"
          on:click={() => selectDetail(detail.id)}
          class:text-blue-400={selectedDetailId === detail.id}
        >
          <p
            class="rounded-full text-sm border-2 w-6 h-6 text-center mr-2"
            style={selectedDetailId === detail.id
              ? "--tw-bg-opacity: 1;border-color: rgb(96 165 250 / var(--tw-bg-opacity));"
              : "gray-400"}
          >
            {index + 1}
          </p>
          <p>{detail.choice}</p>
        </li>
      {/each}
    </ul>
  </div>
  <div class="explain-container flex">
    <button
      on:click={checkAnswer}
      class="text-white text-lg rounded-lg bg-blue-400 px-3 py-2"
      >정답 확인</button
    >
  </div>
</div>
