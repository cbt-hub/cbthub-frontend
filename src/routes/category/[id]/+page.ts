import { dev } from "$app/environment";

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
/**
 * csr는 클라이언트 사이드 렌더링(Client-Side Rendering)을 의미합니다.
 * 여기서는 dev 값을 csr에 할당함으로써, 개발 모드에서는 클라이언트 사이드 렌더링을 사용하고 프로덕션 모드에서는 사용하지 않겠다는 의미입니다.
 * 이는 개발 중에는 핫 모듈 교체(Hot Module Replacement, HMR) 같은 기능을 사용하기 위해 JS를 로드하지만,
 * 프로덕션에서는 JS를 로드할 필요가 없는 정적 페이지를 의미할 수 있습니다.
 */
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
/**
 * prerender 설정은 해당 페이지를 사전에 렌더링하여 정적 파일로 생성하겠다는 의미입니다.
 * 이렇게 하면, 페이지가 프로덕션에 배포될 때 미리 렌더링되어, 서버로부터 요청될 때 바로 정적 파일로 제공될 수 있습니다.
 * 이는 로딩 시간을 줄이고 성능을 개선하는 데 도움이 됩니다.
 */
export const prerender = true;
