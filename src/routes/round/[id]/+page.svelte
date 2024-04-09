<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import {
    fetchQuestion,
    solveQuestion,
  } from "$lib/apis/question/question.api";
  import { writable, type Writable } from "svelte/store";

  interface Detail {
    id: string;
    choice: string;
    isCorrect: boolean;
  }

  interface CorrectDetailWithIndex {
    detail: Detail;
    index: number;
  }

  let question: any = {
    details: [],
    explains: [],
  };
  let roundId: string = "";
  let selectedDetailId: string | null = null; // 선택된 detail의 ID를 저장하는 상태
  let correctDetails: Writable<CorrectDetailWithIndex[]> = writable([]);

  onMount(async () => {
    roundId = $page.params.id;
    const questionId = $page.url.searchParams.get("questionId"); // URL에서 questionId 쿼리 파라미터를 가져옵니다.
    if (roundId) {
      question = await fetchQuestion(roundId, questionId ?? ""); // 쿼리 파라미터와 함께 fetchQuestion을 호출합니다.
    }
  });

  /** detail 선택 이벤트 핸들러 */
  function selectDetail(detailId: string): void {
    selectedDetailId = detailId; // 선택된 detail의 ID를 저장
  }

  /**
   * TODOS:
   * TODO: 정답인지 오답인지 표시하는 로직이 필요합니다.
   * TODO: 정답 확인 버튼을 누르면, 정답 확인 글씨가 정답 접기 글씨로 바뀌고 해설이 보이지 않게 바꿉니다.
   * TODO: 다음문제, 이전문제 버튼을 누르면, 다음 문제로 넘어가거나 이전 문제로 넘어갑니다.
   * TODO: 해설 및 보기를 보여주는 곳에 마크다운 형식의 스타일이 필요합니다. * 줄바꿈이 필요합니다.
   * - 가장 첫번째 문제와 마지막 문제에서는 이전 문제, 다음 문제 버튼이 비활성화 되는 로직이 필요합니다.
   * 
   * 추후 만들고 싶은 기능!
   * TODO: OMR 기능을 추가하여, 사용자가 문제를 빠르게 탐색 가능하게 합니다.
   * TODO: 사용자가 문제를 풀 때마다 통계가 자동으로 기록되어 문제별 정답률을 제공합니다.
   */

  /** 사용자가 정답 확인을 클릭했을 때 발생하는 로직 */
  async function checkAnswer(): Promise<void> {
    console.log(`정답 확인 : ${question.id}, ${selectedDetailId}`);

    if (!selectedDetailId) return;
    if (!selectedDetailId) return;
    try {
      const result = await solveQuestion(question.id, selectedDetailId);
      correctDetails.set(
        question.details
          .map((detail, index) => ({ detail, index }))
          .filter(({ detail }) => detail.isCorrect)
      );
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
          class="flex items-center pr-1 py-1 {detail.isCorrect}"
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
  <div class="button-container flex justify-between">
    <div>
      <button
        on:click={checkAnswer}
        class="text-white text-lg rounded-lg bg-green-400 px-3 py-2 shadow-md"
        >정답 확인</button
      >
    </div>
    <div class="flex">
      <button
        on:click={checkAnswer}
        class="text-white text-lg rounded-full bg-blue-400 px-3 py-2 mr-3 shadow-md"
        ><i class="fa-solid fa-arrow-left"></i></button
      >
      <button
        on:click={checkAnswer}
        class="text-white text-lg rounded-full bg-blue-400 px-3 py-2 shadow-md flex items-center"
        ><p class="mr-2">다음 문제</p>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
  <div class="answers py-4">
    {#each $correctDetails as { detail, index }}
      <div class="w-full border-t-2 mb-4"></div>
      <div class="correct-detail flex flex-col mb-4">
        <div class="flex items-center justify-center bg-green-200 text-gray-600 rounded-sm shadow-md mb-2 w-fit py-1 px-2">
          <p class="text-xl mr-2">정답:</p>
          <p class="rounded-full text-sm border-2 w-6 h-6 text-center border-gray-600">
            {index + 1}
          </p>
        </div>
        <p>{detail.choice}</p>
      </div>
      {#each question.explains as explain}
      <div class="correct-detail flex flex-col mb-4">
        <div class="flex items-center justify-center bg-green-200 text-gray-600 rounded-sm shadow-md mb-2 w-fit py-1 px-2">
          <p class="text-xl mr-2">해설:</p><p class="text-xl">{explain.type}</p>
        </div>
          <p>{explain.explain}</p>
      </div>
      {/each}
    {/each}
  </div>
</div>

<style>
  li {
    cursor: pointer;
  }
</style>
