# 블로그 테마 커스터마이징 가이드

이 문서는 Next.js 블로그에서 Tailwind CSS v4와 next-themes를 사용하여 **다크/라이트 모드**와 **4가지 컬러 테마**를 제공하는 2차원 테마 시스템을 설명합니다.

## 목차

1. [테마 시스템 개요](#테마-시스템-개요)
2. [사용 가능한 테마](#사용-가능한-테마)
3. [CSS 변수 구조](#css-변수-구조)
4. [테마 전환하기](#테마-전환하기)
5. [컴포넌트에서 테마 사용하기](#컴포넌트에서-테마-사용하기)
6. [새로운 테마 추가하기](#새로운-테마-추가하기)
7. [테스트 페이지](#테스트-페이지)

---

## 테마 시스템 개요

### 2차원 테마 구조

이 블로그는 **2개의 독립적인 테마 축**을 제공합니다:

1. **다크/라이트 모드** (Dark/Light Mode)

   - `next-themes` 라이브러리로 관리
   - 시스템 설정 자동 감지 가능
   - 로컬 스토리지에 저장

2. **컬러 테마** (Color Themes)
   - 4가지 컬러 팔레트: default, coral, ocean, forest
   - 커스텀 `useColorTheme` 훅으로 관리
   - 로컬 스토리지에 저장

**총 8가지 조합**: 4개 컬러 × 2개 모드 = 8가지 테마

### 기술 스택

- **Tailwind CSS v4**: `@theme inline` 문법으로 CSS 변수 등록
- **next-themes**: 다크/라이트 모드 관리
- **@tailwindcss/typography**: 마크다운 스타일링
- **CSS Variables**: `--theme-*` (컴포넌트), `--tw-prose-*` (타이포그래피)

---

## 사용 가능한 테마

### 1. Default 테마 (기본)

- **라이트**: 그레이 베이스 + 블루 포인트 (#2563eb)
- **다크**: 진한 그레이 베이스 + 밝은 블루 포인트 (#60a5fa)
- **특징**: 전문적이고 깔끔한 느낌

### 2. Coral 테마

- **라이트**: 핑크/코랄 계열 (#ff6b9d)
- **다크**: 블루/시안 계열 (#7dcfed)
- **특징**: 따뜻하고 부드러운 느낌 (라이트), 눈의 피로 감소 (다크)

### 3. Ocean 테마

- **라이트**: 맑은 스카이 블루 (#0ea5e9)
- **다크**: 깊은 바다색 + 밝은 시안 (#38bdf8)
- **특징**: 시원하고 깨끗한 느낌

### 4. Forest 테마

- **라이트**: 신선한 그린 계열 (#10b981)
- **다크**: 깊은 숲 + 라임 그린 (#34d399)
- **특징**: 자연스럽고 안정적인 느낌

---

## CSS 변수 구조

### 컴포넌트 변수 (`--theme-*`)

각 테마는 **150+ 개의 CSS 변수**를 제공합니다:

#### 브랜드 컬러

- `--theme-primary`, `--theme-primary-light`, `--theme-primary-dark`
- `--theme-secondary`, `--theme-accent`

#### 텍스트 & 배경

- `--theme-text`, `--theme-text-muted`
- `--theme-bg-card`, `--theme-bg-hover`
- `--theme-bg-page`, `--theme-bg-sidebar`, `--theme-bg-header`, `--theme-bg-footer`

#### 테두리

- `--theme-border`, `--theme-border-light`, `--theme-divider`

#### 상태 색상

- `--theme-success`, `--theme-success-light`
- `--theme-warning`, `--theme-warning-light`
- `--theme-error`, `--theme-error-light`
- `--theme-info`, `--theme-info-light`

#### 링크

- `--theme-link`, `--theme-link-hover`, `--theme-link-visited`

#### 그림자 & 포커스

- `--theme-shadow`, `--theme-shadow-lg`
- `--theme-focus`, `--theme-focus-ring`

#### 버튼 (Primary, Secondary, Outline, Ghost)

- `--theme-btn-primary-bg`, `--theme-btn-primary-text`, `--theme-btn-primary-hover`, `--theme-btn-primary-active`
- `--theme-btn-secondary-bg`, `--theme-btn-secondary-text`, `--theme-btn-secondary-hover`, `--theme-btn-secondary-border`
- `--theme-btn-outline-border`, `--theme-btn-outline-text`, `--theme-btn-outline-hover-bg`
- `--theme-btn-ghost-text`, `--theme-btn-ghost-hover`

#### 입력 요소

- `--theme-input-bg`, `--theme-input-border`, `--theme-input-border-hover`, `--theme-input-border-focus`
- `--theme-input-text`, `--theme-input-placeholder`
- `--theme-input-disabled-bg`, `--theme-input-disabled-text`

#### 배지 & 태그

- `--theme-badge-bg`, `--theme-badge-text`
- `--theme-tag-bg`, `--theme-tag-text`, `--theme-tag-hover`

#### 카드

- `--theme-card-elevated-shadow`, `--theme-card-border-accent`

#### 토글 & 체크박스

- `--theme-toggle-bg`, `--theme-toggle-bg-on`, `--theme-toggle-thumb`
- `--theme-checkbox-border`, `--theme-checkbox-checked`

#### 모달 & 알림

- `--theme-modal-overlay`, `--theme-modal-bg`
- `--theme-notification-bg`, `--theme-notification-border`

#### 프로그레스 바

- `--theme-progress-bg`, `--theme-progress-fill`

#### 툴팁

- `--theme-tooltip-bg`, `--theme-tooltip-text`

### 타이포그래피 변수 (`--tw-prose-*`)

마크다운 콘텐츠 스타일링을 위한 **30+ 개의 변수**:

- `--tw-prose-body`, `--tw-prose-headings`, `--tw-prose-lead`
- `--tw-prose-links`, `--tw-prose-link-underline`
- `--tw-prose-bold`, `--tw-prose-strong`, `--tw-prose-italic`
- `--tw-prose-quotes`, `--tw-prose-quote-borders`
- `--tw-prose-code`, `--tw-prose-code-bg`
- `--tw-prose-pre-code`, `--tw-prose-pre-bg`
- `--tw-prose-hr`, `--tw-prose-th-borders`, `--tw-prose-td-borders`
- `--tw-prose-counters`, `--tw-prose-bullets`
- `--tw-prose-captions`, `--tw-prose-kbd`, `--tw-prose-kbd-shadows`

### Tailwind 클래스 등록

`globals.css`의 `@theme inline` 블록에서 모든 변수를 Tailwind 유틸리티로 등록:

```css
@theme inline {
  /* 컴포넌트 변수를 Tailwind 클래스로 매핑 */
  --color-theme-primary: var(--theme-primary);
  --color-theme-text: var(--theme-text);
  --color-theme-bg-card: var(--theme-bg-card);
  --color-theme-btn-primary-bg: var(--theme-btn-primary-bg);
  /* ... 150+ 변수 */
}
```

이제 다음과 같이 사용 가능:

```tsx
<button className="bg-theme-btn-primary-bg text-theme-btn-primary-text hover:bg-theme-btn-primary-hover">
  버튼
</button>
```

---

## 테마 전환하기

### 다크/라이트 모드 전환

`next-themes`의 `useTheme` 훅 사용:

```tsx
'use client';

import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
```

### 컬러 테마 전환

커스텀 `useColorTheme` 훅 사용:

```tsx
'use client';

import { useColorTheme } from '@/hooks/useColorTheme';

export default function ColorThemeSwitcher() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <div>
      <button onClick={() => setColorTheme('default')}>Default</button>
      <button onClick={() => setColorTheme('coral')}>Coral</button>
      <button onClick={() => setColorTheme('ocean')}>Ocean</button>
      <button onClick={() => setColorTheme('forest')}>Forest</button>
    </div>
  );
}
```

### 통합 테마 토글 컴포넌트

```tsx
// components/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { useColorTheme } from '@/hooks/useColorTheme';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <div className="flex gap-4">
      {/* 다크/라이트 모드 */}
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? '🌙 다크' : '☀️ 라이트'}
      </button>

      {/* 컬러 테마 */}
      <select value={colorTheme} onChange={e => setColorTheme(e.target.value as any)}>
        <option value="default">Default</option>
        <option value="coral">Coral</option>
        <option value="ocean">Ocean</option>
        <option value="forest">Forest</option>
      </select>
    </div>
  );
}
```

---

## 컴포넌트에서 테마 사용하기

### 1. Tailwind 클래스 사용

```tsx
export default function Card() {
  return (
    <div className="bg-theme-bg-card border border-theme-border rounded-lg p-6 hover:bg-theme-bg-hover">
      <h3 className="text-theme-primary text-xl font-bold">제목</h3>
      <p className="text-theme-text-muted">설명 텍스트</p>
      <button className="bg-theme-btn-primary-bg text-theme-btn-primary-text hover:bg-theme-btn-primary-hover">
        클릭
      </button>
    </div>
  );
}
```

### 2. CSS 변수 직접 사용

```tsx
export default function CustomComponent() {
  return (
    <div
      style={{
        backgroundColor: 'var(--theme-bg-card)',
        borderColor: 'var(--theme-border)',
        color: 'var(--theme-text)'
      }}>
      커스텀 스타일
    </div>
  );
}
```

### 3. 마크다운 스타일링

```tsx
export default function BlogPost({ content }: { content: string }) {
  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto">
      <MDXRemote source={content} />
    </article>
  );
}
```

**참고**: `prose` 클래스는 자동으로 현재 활성화된 컬러 테마의 타이포그래피 변수를 적용합니다. 각 테마 파일(`coral.css`, `ocean.css` 등)에서 `.coral .prose`, `.dark.coral .prose` 형태로 정의되어 있습니다.

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

## 테스트 페이지

모든 테마 조합을 테스트할 수 있는 페이지가 `/test` 경로에 준비되어 있습니다.

### 접속 방법

```bash
npm run dev
# http://localhost:3000/test 접속
```

### 포함된 컴포넌트

1. **버튼 4종**: Primary, Secondary, Outline, Ghost
2. **상태 색상**: Success, Warning, Error, Info
3. **입력 요소**: Input, Textarea, Disabled 상태
4. **카드**: 기본, Elevated (그림자), Accent Border
5. **배지 & 태그**: 다양한 스타일
6. **체크박스 & 토글**: 인터랙티브 요소
7. **링크**: 기본, Hover, Visited 상태
8. **프로그레스 바**: 다양한 진행률
9. **알림**: 여러 타입
10. **구분선**: 수평선
11. **텍스트 스타일**: Primary, Muted
12. **툴팁**: 호버 시 표시

### 테스트 시나리오

1. 페이지 상단의 **ThemeToggle** 컴포넌트 사용
2. 다크/라이트 모드 전환 → 모든 요소 확인
3. 4가지 컬러 테마 순회 → 각 테마별 색상 확인
4. 총 **8가지 조합**(4 컬러 × 2 모드) 모두 테스트
5. 각 컴포넌트의 호버, 포커스, 액티브 상태 확인

---

## 베스트 프랙티스

### 1. CSS 변수 네이밍

- **일관성**: 모든 테마에서 동일한 변수명 사용
- **의미 전달**: `--theme-btn-primary-bg` (O), `--blue-color` (X)
- **계층 구조**: `--theme-[카테고리]-[요소]-[상태]`

### 2. 색상 선택 가이드

**라이트 모드**:

- 배경: 밝은 색 (#ffffff ~ #f9fafb)
- 텍스트: 어두운 색 (#111827 ~ #4b5563)
- 포인트 컬러: 채도 높은 색

**다크 모드**:

- 배경: 어두운 색 (#0a0a0a ~ #1f2937)
- 텍스트: 밝은 색 (#d1d5db ~ #f9fafb)
- 포인트 컬러: 채도 낮추고 밝기 올림 (눈부심 방지)

**접근성**:

- WCAG AA 기준: 텍스트 대비비 4.5:1 이상
- 순수 검정/흰색 피하기 → `#0a0a0a`, `#fafafa` 권장
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) 활용

### 3. 컴포넌트 스타일링 전략

**Tailwind 클래스 우선** (유지보수 용이):

```tsx
<button className="bg-theme-btn-primary-bg hover:bg-theme-btn-primary-hover">버튼</button>
```

**CSS 변수 직접 사용** (동적 스타일):

```tsx
<div style={{ color: `var(--theme-${dynamicColor})` }}>동적 색상</div>
```

### 4. 테마 전환 애니메이션

부드러운 전환 효과 추가:

```css
/* globals.css */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```

**주의**: 성능 이슈가 있다면 특정 요소만 적용

### 5. 로컬 스토리지 관리

`next-themes`와 `useColorTheme`은 자동으로 사용자 선택을 저장합니다:

- 다크/라이트 모드: `localStorage.theme`
- 컬러 테마: `localStorage.colorTheme`

**SSR 주의사항**: 초기 렌더링 시 깜빡임 방지를 위해 `suppressHydrationWarning` 사용:

```tsx
<html lang="ko" suppressHydrationWarning>
```

---

## 파일 구조

```
blog/
├── src/
│   ├── app/
│   │   ├── globals.css           # 메인 CSS, @theme inline 블록
│   │   ├── layout.tsx            # ThemeProvider 설정
│   │   └── test/
│   │       └── page.tsx          # 테마 테스트 페이지
│   ├── styles/
│   │   └── themes/
│   │       ├── default.css       # Default 테마
│   │       ├── coral.css         # Coral 테마
│   │       ├── ocean.css         # Ocean 테마
│   │       └── forest.css        # Forest 테마
│   ├── hooks/
│   │   └── useColorTheme.ts      # 컬러 테마 관리 훅
│   └── components/
│       └── ThemeToggle.tsx       # 테마 전환 UI
└── docs/
    └── theme-guide.md            # 이 문서
```

---

## 트러블슈팅

### 문제: 테마 전환 시 깜빡임

**원인**: SSR 시 서버와 클라이언트의 테마 불일치

**해결**:

```tsx
// layout.tsx
<html lang="ko" suppressHydrationWarning>
```

### 문제: CSS 변수가 Tailwind에서 인식 안 됨

**원인**: `@theme inline` 블록에 등록되지 않음

**해결**: `globals.css`에서 변수 등록 확인

```css
@theme inline {
  --color-theme-변수명: var(--theme-변수명);
}
```

### 문제: 다크 모드에서 일부 색상이 안 보임

**원인**: 대비비 부족 또는 변수 누락

**해결**:

1. 해당 테마 파일의 `.dark.테마명` 섹션 확인
2. 모든 변수가 라이트 모드와 동일하게 정의되었는지 확인
3. [Contrast Checker](https://webaim.org/resources/contrastchecker/)로 대비비 검증

### 문제: 새 테마 추가 후 적용 안 됨

**체크리스트**:

- [ ] `globals.css`에 `@import` 추가했는가?
- [ ] `useColorTheme.ts`의 타입에 추가했는가?
- [ ] 라이트/다크 모드 모두 정의했는가?
- [ ] 150+ 컴포넌트 변수 + 30+ prose 변수 완성했는가?

---

## 참고 자료

- [Tailwind CSS v4 공식 문서](https://tailwindcss.com/docs)
- [Tailwind Typography 플러그인](https://tailwindcss.com/docs/typography-plugin)
- [next-themes GitHub](https://github.com/pacocoursey/next-themes)
- [CSS 변수 (MDN)](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)
- [WCAG 접근성 가이드](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 마무리

이 블로그는 **8가지 테마 조합** (4개 컬러 × 2개 모드)을 제공하는 유연한 테마 시스템을 갖추고 있습니다.

- **150+ 컴포넌트 변수**로 모든 UI 요소 스타일링
- **30+ 타이포그래피 변수**로 마크다운 콘텐츠 최적화
- **독립적인 2축 제어**로 사용자 맞춤 경험 제공
- **접근성과 일관성**을 모두 고려한 디자인

새로운 테마를 추가하거나 기존 테마를 수정할 때는 **모든 변수의 일관성**을 유지하는 것이 중요합니다. `/test` 페이지에서 충분히 테스트한 후 배포하세요! 🎨
