# 블로그 테마 커스터마이징 가이드

이 문서는 Next.js 블로그에서 Tailwind CSS를 사용하여 전역 테마와 Typography 테마를 커스터마이징하는 방법을 설명합니다.

## 목차

1. [기본 개념](#기본-개념)
2. [Typography 테마 커스터마이징](#typography-테마-커스터마이징)
3. [전역 테마 설정](#전역-테마-설정)
4. [다크 모드 설정](#다크-모드-설정)
5. [실전 예제](#실전-예제)

---

## 기본 개념

### Tailwind CSS v4의 테마 시스템

Tailwind CSS v4에서는 기존의 `tailwind.config.js` 대신 **CSS 파일에서 직접 테마를 정의**합니다.

```css
@import 'tailwindcss';

:root {
  --my-color: #ff6b9d;
}

@theme inline {
  --color-primary: var(--my-color);
}
```

이렇게 하면 `bg-primary`, `text-primary` 같은 Tailwind 클래스로 사용할 수 있습니다.

---

## Typography 테마 커스터마이징

### 1. 플러그인 설치

```bash
npm install @tailwindcss/typography
```

### 2. 플러그인 등록

`globals.css`에 플러그인을 추가합니다:

```css
@import 'tailwindcss';
@plugin '@tailwindcss/typography';
```

### 3. 기본 제공 테마

Typography는 다음과 같은 테마를 기본 제공합니다:

- `prose-gray` (기본)
- `prose-slate`
- `prose-zinc`
- `prose-neutral`
- `prose-stone`

**사용 방법:**

```tsx
<article className="prose prose-slate dark:prose-invert">
  <MDXRemote source={content} />
</article>
```

### 4. 커스텀 Typography 테마 만들기

#### 4.1 커스터마이징 가능한 CSS 변수 목록

총 **30개 이상**의 CSS 변수를 커스터마이징할 수 있습니다:

| 변수명                       | 설명                    |
| ---------------------------- | ----------------------- |
| `--tw-prose-body`            | 본문 텍스트 색상        |
| `--tw-prose-headings`        | 제목 (h1~h6) 색상       |
| `--tw-prose-lead`            | 리드 문단 색상          |
| `--tw-prose-links`           | 링크 색상               |
| `--tw-prose-link-underline`  | 링크 밑줄 색상          |
| `--tw-prose-bold`            | 굵은 글씨 색상          |
| `--tw-prose-strong`          | strong 태그 색상        |
| `--tw-prose-italic`          | 이탤릭 색상             |
| `--tw-prose-underline`       | 밑줄 색상               |
| `--tw-prose-quotes`          | 인용문 텍스트 색상      |
| `--tw-prose-quote-borders`   | 인용문 테두리 색상      |
| `--tw-prose-code`            | 인라인 코드 텍스트 색상 |
| `--tw-prose-code-bg`         | 인라인 코드 배경 색상   |
| `--tw-prose-pre-code`        | 코드 블록 텍스트 색상   |
| `--tw-prose-pre-bg`          | 코드 블록 배경 색상     |
| `--tw-prose-hr`              | 수평선 색상             |
| `--tw-prose-th-borders`      | 테이블 헤더 테두리      |
| `--tw-prose-td-borders`      | 테이블 셀 테두리        |
| `--tw-prose-counters`        | 목록 번호 색상          |
| `--tw-prose-bullets`         | 글머리 기호 색상        |
| `--tw-prose-ol-counters`     | 순서 목록 번호          |
| `--tw-prose-ul-bullets`      | 비순서 목록 기호        |
| `--tw-prose-captions`        | 캡션 색상               |
| `--tw-prose-figcaptions`     | figure 캡션 색상        |
| `--tw-prose-kbd`             | 키보드 입력 색상        |
| `--tw-prose-kbd-shadows`     | 키보드 그림자 색상      |
| `--tw-prose-invert-body`     | invert 모드 본문        |
| `--tw-prose-invert-headings` | invert 모드 제목        |
| `--tw-prose-invert-links`    | invert 모드 링크        |
| `--tw-prose-invert-bold`     | invert 모드 굵은 글씨   |

#### 4.2 커스텀 테마 작성 예제

`globals.css`에 다음과 같이 추가합니다:

```css
/* 커스텀 테마 - 예: 코랄 테마 */
.prose-coral {
  /* 기본 텍스트 */
  --tw-prose-body: #4a5568;
  --tw-prose-headings: #ff6b9d;
  --tw-prose-lead: #718096;

  /* 링크 */
  --tw-prose-links: #ff4081;
  --tw-prose-link-underline: #ff80ab;

  /* 강조 */
  --tw-prose-bold: #ff6b9d;
  --tw-prose-code: #ff4081;
  --tw-prose-code-bg: #fff5f7;

  /* 코드 블록 */
  --tw-prose-pre-code: #ffe0eb;
  --tw-prose-pre-bg: #2d1a24;

  /* 인용문 */
  --tw-prose-quotes: #ff8fb3;
  --tw-prose-quote-borders: #ffc2d4;

  /* 목록 */
  --tw-prose-counters: #ff6b9d;
  --tw-prose-bullets: #ff8fb3;
}
```

#### 4.3 다크 모드 대응

```css
.dark .prose-coral {
  --tw-prose-body: #cbd5e0;
  --tw-prose-headings: #7dcfed;
  --tw-prose-links: #5eb3d6;
  --tw-prose-code: #5eb3d6;
  --tw-prose-code-bg: #1a2332;
  --tw-prose-pre-code: #d4f1f9;
  --tw-prose-pre-bg: #1a202c;
}
```

#### 4.4 적용하기

```tsx
<article className="prose prose-coral dark:prose-invert max-w-3xl">
  <MDXRemote source={content} />
</article>
```

---

## 전역 테마 설정

Typography 외의 모든 요소에 일관된 테마를 적용하는 방법입니다.

### 1. CSS 변수 정의

`globals.css`에서 `:root`에 전역 변수를 정의합니다:

```css
:root {
  /* 기본 배경 및 텍스트 */
  --background: #ffffff;
  --foreground: #171717;

  /* 브랜드 컬러 */
  --primary: #ff6b9d;
  --primary-light: #ff8fb3;
  --primary-dark: #ff4081;

  --secondary: #5eb3d6;
  --secondary-light: #89d4ed;
  --secondary-dark: #4a90b0;

  /* 그레이 스케일 */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;

  /* 상태 컬러 */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;

  /* 테두리 및 구분선 */
  --border: #e5e7eb;
  --divider: #d1d5db;

  /* 카드 배경 */
  --card-bg: #ffffff;
  --hover-bg: #f9fafb;
}
```

### 2. Tailwind 테마로 등록

`@theme inline` 블록에서 Tailwind 클래스로 사용할 수 있게 등록합니다:

```css
@theme inline {
  /* 기본 컬러 */
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  /* 브랜드 컬러 */
  --color-primary: var(--primary);
  --color-primary-light: var(--primary-light);
  --color-primary-dark: var(--primary-dark);

  --color-secondary: var(--secondary);
  --color-secondary-light: var(--secondary-light);
  --color-secondary-dark: var(--secondary-dark);

  /* 그레이 스케일 */
  --color-gray-50: var(--gray-50);
  --color-gray-100: var(--gray-100);
  --color-gray-200: var(--gray-200);
  --color-gray-300: var(--gray-300);
  --color-gray-400: var(--gray-400);
  --color-gray-500: var(--gray-500);
  --color-gray-600: var(--gray-600);
  --color-gray-700: var(--gray-700);
  --color-gray-800: var(--gray-800);
  --color-gray-900: var(--gray-900);

  /* 상태 컬러 */
  --color-success: var(--success);
  --color-warning: var(--warning);
  --color-error: var(--error);
  --color-info: var(--info);

  /* 폰트 */
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### 3. 사용 방법

이제 Tailwind 클래스로 사용할 수 있습니다:

```tsx
{/* 브랜드 컬러 */}
<button className="bg-primary text-white hover:bg-primary-dark">
  Click Me
</button>

{/* 그레이 스케일 */}
<p className="text-gray-600">본문 텍스트</p>
<div className="bg-gray-100 border border-gray-200">카드</div>

{/* 상태 컬러 */}
<div className="text-success">성공!</div>
<div className="text-error">에러 발생</div>

{/* 커스텀 변수 직접 사용 */}
<div style={{ background: 'var(--card-bg)' }}>
  Content
</div>
```

---

## 다크 모드 설정

### 1. 자동 다크 모드 (시스템 설정 기반)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;

    /* 다크 모드에서는 컬러를 반전하거나 조정 */
    --primary: #7dcfed;
    --secondary: #ff8fb3;

    --gray-50: #1a1a1a;
    --gray-100: #2d2d2d;
    --gray-900: #fafafa;

    --border: #2d2d2d;
    --card-bg: #1a1a1a;
  }
}
```

### 2. 수동 다크 모드 토글

`layout.tsx`에서 다크 모드 클래스를 제어합니다:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="dark">
      {' '}
      {/* 'dark' 클래스 추가 */}
      <body>{children}</body>
    </html>
  );
}
```

그리고 CSS에서:

```css
.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  /* ... */
}
```

### 3. 다크 모드별 스타일 적용

```tsx
<div className="bg-white dark:bg-gray-800 text-black dark:text-white">Content</div>
```

---

## 실전 예제

### 예제 1: 코랄 핑크/블루 테마

라이트 모드는 핑크, 다크 모드는 블루 계열로 설정하는 예제입니다.

```css
/* globals.css */
:root {
  --background: #ffffff;
  --foreground: #171717;
  --accent: #ff6b9d; /* 핑크 */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    --accent: #5eb3d6; /* 블루 */
  }
}

.prose-coral {
  /* 라이트: 핑크 계열 */
  --tw-prose-headings: #ff6b9d;
  --tw-prose-links: #ff4081;
  --tw-prose-code: #ff4081;
}

.dark .prose-coral {
  /* 다크: 블루 계열 */
  --tw-prose-headings: #7dcfed;
  --tw-prose-links: #5eb3d6;
  --tw-prose-code: #5eb3d6;
}
```

### 예제 2: 전체 페이지 테마 통일

```tsx
// page.tsx
export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <nav className="flex gap-4 p-4">
          <a href="/" className="text-primary hover:text-primary-dark">
            Home
          </a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto py-8">
        <article className="prose prose-coral dark:prose-invert">
          <h1>블로그 제목</h1>
          <MDXRemote source={content} />
        </article>
      </main>

      <footer className="mt-20 py-8 border-t border-divider bg-gray-50 dark:bg-gray-900">
        <p className="text-center text-gray-500">© 2025 My Blog</p>
      </footer>
    </div>
  );
}
```

---

## 팁과 베스트 프랙티스

### 1. 컬러 네이밍 규칙

- 의미 기반: `--primary`, `--secondary`, `--accent`
- 용도 기반: `--text-primary`, `--bg-card`, `--border-default`
- 둘 다 혼용 가능하지만 일관성 유지

### 2. 다크 모드 컬러 선택

- 순수 흑백 피하기 (`#000`, `#fff` → `#0a0a0a`, `#ededed`)
- 대비비 확인 (WCAG AA 기준: 4.5:1)
- 채도 낮추기 (다크 모드에서는 밝은 색이 눈부심)

### 3. Typography 스타일 우선순위

```tsx
{
  /* 우선순위: inline > prose-custom > prose 기본 */
}
<article className="prose prose-coral">
  <h1>자동 스타일</h1>
  <h2 className="text-primary">개별 커스텀</h2> {/* prose 스타일 덮어씀 */}
</article>;
```

### 4. 테마 테스트

개발 중에는 브라우저 개발자 도구에서 다크 모드를 강제로 전환할 수 있습니다:

1. Chrome DevTools → Rendering → Emulate CSS media feature prefers-color-scheme
2. `dark` 또는 `light` 선택

---

## 참고 자료

- [Tailwind CSS v4 공식 문서](https://tailwindcss.com/docs)
- [Tailwind Typography 플러그인](https://tailwindcss.com/docs/typography-plugin)
- [Typography 라이브 데모](https://tailwindcss-typography.vercel.app/)
- [CSS 변수 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)
