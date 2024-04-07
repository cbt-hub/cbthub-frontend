<script>
  import Category from "./Category.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- 
  TODO: 마이크로소프트 앱 나오는 것 처럼 디자인 할 것임
  @link https://www.samsungsvc.co.kr/proxy?isAttach=true&fileInfo=KTllLV9rTGNCS0JsMEJDLksvfERfK3kjQC5lNC9dQ3kyL2VCWlw/PSEqbGV8ayZtIV4zTDRNLTlra3xjeUF5JUB4emUyMm4vRC9ENy5dYD9LNV1ubkB7KClhZS1uQltea0tKbE5rejUpTl9MWDNDNil8XS0rQiQjKyYxRC9LLCEyfDE0akRbeSs6bEw6fi0jQV5jWCZLNF1BTkw__C__&fileName=8-1.jpg&fromNamo=true&faqFlag=true
  - 이런 느낌!

  FIXME: 카테고리가 '비율'로 나오게끔 바꿔야 함
  - 현재는 비율로 나오지 않아 반응형에 굉장히 취약하다.
 -->
<section class="m-4 flex px-32 py-8">
  <Category />
</section>

<style></style>
