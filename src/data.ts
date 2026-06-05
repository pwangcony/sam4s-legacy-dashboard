import { ComparisonItem, SummaryItem } from './types';

export const basicComparison: ComparisonItem[] = [
  { id: 'b1', category: '아키텍처', legacy: '클래식 ASP 서버 렌더링 (IIS)', modern: 'Next.js 14 App Router (정적 export / SSR 선택)' },
  { id: 'b2', category: '개발 언어', legacy: 'VBScript (<% %>)', modern: 'TypeScript / React (TSX)' },
  { id: 'b3', category: '문자 인코딩', legacy: 'EUC-KR (charset_euc_kr.asp)', modern: 'UTF-8' },
  { id: 'b4', category: '데이터베이스', legacy: 'MSSQL Server (ADO msado15.dll)', modern: '정적 데이터 모듈(nav.ts)·시안용 mock' },
  { id: 'b5', category: '빌드 시스템', legacy: '없음 (파일 직접 배포)', modern: 'npm + Next 빌드 파이프라인' },
  { id: 'b6', category: '형상관리', legacy: '없음(추정), 수동 FTP(가비아)', modern: 'Git + GitHub(private)' },
  { id: 'b7', category: '배포', legacy: 'IIS 서버 / 수동 업로드', modern: 'Cloudflare Pages CI/CD (자동 빌드·배포)' },
  { id: 'b8', category: '다국어', legacy: '폴더 분기( /kor/asp, /eng/asp, china 등)', modern: '라우트 분기( /kor, /eng) 구조화' },
  { id: 'b9', category: '진입 처리', legacy: 'index.asp → Response.Redirect (서버명 판별)', modern: 'Next 라우팅 + 미들웨어(메인 브랜치)' },
];

export const techStackComparison: ComparisonItem[] = [
  { id: 't1', category: '런타임/프레임워크', legacy: 'ASP (IIS), aspx 혼재', modern: 'Next.js 14.2.5 / React 18' },
  { id: 't2', category: '언어', legacy: 'VBScript, 일부 JS', modern: 'TypeScript 5' },
  { id: 't3', category: '스타일', legacy: '정적 CSS(310개) 산재', modern: 'Tailwind CSS 3.4 + globals.css (단일 체계)' },
  { id: 't4', category: 'UI 인터랙션', legacy: 'Flash(.swf 231개), 구형 jQuery류 JS(1,185개)', modern: 'Swiper(슬라이더), 자체 스크롤/애니메이션 컴포넌트' },
  { id: 't5', category: '아이콘', legacy: '이미지 아이콘(gif/png)', modern: 'lucide-react (벡터 아이콘)' },
  { id: 't6', category: '이미지 처리', legacy: '수작업(포토샵 추정)', modern: 'sharp 기반 자동 변환 스크립트' },
  { id: 't7', category: '보안(폼)', legacy: '없음', modern: 'Cloudflare Turnstile 봇 방지' },
  { id: 't8', category: '지도/영상', legacy: 'iframe/플러그인', modern: 'GoogleMap·YoutubeEmbed 컴포넌트' },
];

export const directoryComparison: ComparisonItem[] = [
  { id: 'd1', category: '핵심 소스', legacy: 'kor/ (344), eng/ (333), admin/ (3,045), include/ (16) ASP 파일', modern: 'src/app (39 page) · src/components (32) · src/lib(2)' },
  { id: 'd2', category: '소스 파일 형식', legacy: 'asp 2,161 · html 1,381 · js 1,185 · aspx 114', modern: 'tsx 78 · ts 2 · css 1' },
  { id: 'd3', category: '게시판 모듈', legacy: 'include/board_*.asp 9종 + paging.asp · download.asp', modern: 'BoardTable.tsx · Pagination.tsx 컴포넌트' },
  { id: 'd4', category: '관리자', legacy: 'ASP 관리자 3,045 파일', modern: '쿠키세션 + 단일 API 라우트(메인) / 시안엔 제외' },
  { id: 'd5', category: '불필요 잔재', legacy: 'aaaddd, china11, eng2... .BAK(323MB), .swf 등 샘플 다수', modern: '없음(클린 구조)' },
];

export const imageOptimization: ComparisonItem[] = [
  { id: 'i1', category: '메인 이미지 포맷', legacy: 'jpg 위주( images/ : jpg 2,598 · gif 88 · bmp 16 · png 5)', modern: 'webp 도입(77개) + png 106 · jpg 64' },
  { id: 'i2', category: '전체 사이트 잔재', legacy: 'jpg 10,171 · gif 5,101 · Flash swf 231', modern: 'webp 기반 경량화' },
  { id: 'i3', category: '동일 이미지 재제작', legacy: '동일 제품컷을 무거운 jpg로 사용', modern: '동일 이미지를 투명 webp로 신규 생성' },
  { id: 'i4', category: '배경 투명 처리', legacy: '없음(흰 배경 jpg)', modern: 'sharp로 흰 배경 → 투명 처리' },
  { id: 'i5', category: '변환 기법', legacy: '수작업', modern: '테두리 flood-fill로 배경만 제거 + 안티앨리어싱' },
  { id: 'i6', category: '대표 성과', legacy: '—', modern: 'FORZA 8컷 jpg→투명 webp (예: 20KB→8.4KB, 약 40~60% 절감)' },
  { id: 'i7', category: '자동화', legacy: '없음', modern: 'sharp 빌드 스크립트로 일괄 변환 파이프라인 구축' },
];

export const legacyRemoved: SummaryItem[] = [
  { id: 'r1', title: 'Flash(.swf 231)', description: 'HTML/CSS/JS 인터랙션으로 대체' },
  { id: 'r2', title: 'EUC-KR', description: 'UTF-8 전환' },
  { id: 'r3', title: 'ASP 게시판/관리자', description: 'React 컴포넌트 + (메인) 경량 인증으로 대체' },
  { id: 'r4', title: '중복·샘플 폴더', description: 'aaaddd · china11 · eng2 · english · db_backup 등 미반영' },
  { id: 'r5', title: '대용량 백업', description: '.BAK (323MB) · backup.bak · .exe · .zip 등 비포함' },
  { id: 'r6', title: '정적 export 시', description: '백엔드 admin·API·미들웨어 제외(시안 보안)' },
];

export const improvements: SummaryItem[] = [
  { id: 'im1', title: '유지보수성', description: '2,000+ ASP 파일 → 80개 미만 컴포넌트, 타입 안전(TS)' },
  { id: 'im2', title: '성능', description: 'webp 경량화·정적 호스팅(CDN) → 로딩 속도 향상' },
  { id: 'im3', title: '보안', description: 'Turnstile 봇 방지, 관리자 자격증명 환경변수화, 정적 시안엔 백엔드 미노출' },
  { id: 'im4', title: '배포', description: '수동 FTP → Git push 자동 빌드·배포(Cloudflare)' },
  { id: 'im5', title: '확장성', description: '다국어·컴포넌트 재사용·데이터 구동 구조' },
  { id: 'im6', title: '호환성', description: 'Flash·EUC-KR 등 단종 기술 제거, 모던 브라우저 대응' },
];
