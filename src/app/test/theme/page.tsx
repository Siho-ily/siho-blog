'use client';

import { ThemeToggle } from '@/components/ThemeToggle';

export default function TestThemePage() {
  return (
    <div className="min-h-screen bg-theme-bg-page p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="bg-theme-bg-header border-b border-theme-divider p-6 rounded-lg">
          <h1 className="text-4xl font-bold text-theme-text mb-2">테마 시스템 테스트</h1>
          <p className="text-theme-text-muted">
            모든 컴포넌트와 색상 변수를 테스트할 수 있는 페이지입니다
          </p>
        </header>

        {/* Buttons Section */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">버튼 (Buttons)</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 rounded bg-theme-btn-primary-bg text-theme-btn-primary-text hover:bg-theme-btn-primary-hover active:bg-theme-btn-primary-active transition">
              Primary Button
            </button>
            <button className="px-4 py-2 rounded bg-theme-btn-secondary-bg text-theme-btn-secondary-text hover:bg-theme-btn-secondary-hover border border-theme-btn-secondary-border transition">
              Secondary Button
            </button>
            <button className="px-4 py-2 rounded border-2 border-theme-btn-outline-border text-theme-btn-outline-text hover:bg-theme-btn-outline-hover-bg transition">
              Outline Button
            </button>
            <button className="px-4 py-2 rounded text-theme-btn-ghost-text hover:bg-theme-btn-ghost-hover transition">
              Ghost Button
            </button>
          </div>
        </section>

        {/* Status Colors */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">상태 색상 (Status Colors)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-theme-success text-white p-4 rounded-lg">
              <p className="font-bold">Success</p>
              <p className="text-sm">작업이 성공했습니다</p>
            </div>
            <div className="bg-theme-warning text-white p-4 rounded-lg">
              <p className="font-bold">Warning</p>
              <p className="text-sm">주의가 필요합니다</p>
            </div>
            <div className="bg-theme-error text-white p-4 rounded-lg">
              <p className="font-bold">Error</p>
              <p className="text-sm">오류가 발생했습니다</p>
            </div>
            <div className="bg-theme-info text-white p-4 rounded-lg">
              <p className="font-bold">Info</p>
              <p className="text-sm">정보를 확인하세요</p>
            </div>
          </div>
        </section>

        {/* Input Elements */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">입력 요소 (Inputs)</h2>
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-theme-text mb-2">텍스트 입력</label>
              <input
                type="text"
                placeholder="입력하세요..."
                className="w-full px-4 py-2 rounded bg-theme-input-bg border border-theme-input-border text-theme-input-text placeholder:text-theme-input-placeholder focus:border-theme-input-border-focus focus:outline-none focus:ring-2 focus:ring-theme-focus/30 transition"
              />
            </div>
            <div>
              <label className="block text-theme-text mb-2">비활성 입력</label>
              <input
                type="text"
                placeholder="비활성..."
                disabled
                className="w-full px-4 py-2 rounded bg-theme-input-disabled-bg border border-theme-input-border text-theme-input-disabled-text cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-theme-text mb-2">텍스트 영역</label>
              <textarea
                placeholder="여러 줄 입력..."
                rows={4}
                className="w-full px-4 py-2 rounded bg-theme-input-bg border border-theme-input-border text-theme-input-text placeholder:text-theme-input-placeholder focus:border-theme-input-border-focus focus:outline-none focus:ring-2 focus:ring-theme-focus/30 transition"
              />
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">카드 (Cards)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-theme-bg-card border border-theme-border rounded-lg p-4 hover:bg-theme-bg-hover transition">
              <h3 className="text-lg font-bold text-theme-text mb-2">기본 카드</h3>
              <p className="text-theme-text-muted">일반적인 카드 스타일입니다</p>
            </div>
            <div className="bg-theme-bg-card border-2 border-theme-card-border-accent rounded-lg p-4 shadow-lg">
              <h3 className="text-lg font-bold text-theme-text mb-2">강조 카드</h3>
              <p className="text-theme-text-muted">강조된 테두리와 그림자</p>
            </div>
            <div className="bg-theme-bg-card border border-theme-border rounded-lg p-4 hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-theme-text mb-2">Hover 카드</h3>
              <p className="text-theme-text-muted">마우스를 올려보세요</p>
            </div>
          </div>
        </section>

        {/* Badges & Tags */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">배지 & 태그 (Badges & Tags)</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-theme-badge-bg text-theme-badge-text text-sm font-medium">
                배지
              </span>
              <span className="px-3 py-1 rounded-full bg-theme-success-light text-white text-sm font-medium">
                Success
              </span>
              <span className="px-3 py-1 rounded-full bg-theme-warning-light text-white text-sm font-medium">
                Warning
              </span>
              <span className="px-3 py-1 rounded-full bg-theme-error-light text-white text-sm font-medium">
                Error
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 rounded bg-theme-tag-bg text-theme-tag-text hover:bg-theme-tag-hover transition text-sm">
                #React
              </button>
              <button className="px-3 py-1 rounded bg-theme-tag-bg text-theme-tag-text hover:bg-theme-tag-hover transition text-sm">
                #NextJS
              </button>
              <button className="px-3 py-1 rounded bg-theme-tag-bg text-theme-tag-text hover:bg-theme-tag-hover transition text-sm">
                #Tailwind
              </button>
            </div>
          </div>
        </section>

        {/* Checkboxes & Toggles */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">
            체크박스 & 토글 (Checkboxes & Toggles)
          </h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-2 border-theme-checkbox-border checked:bg-theme-checkbox-checked checked:border-theme-checkbox-checked focus:ring-2 focus:ring-theme-focus/30"
              />
              <span className="text-theme-text">체크박스 옵션 1</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 rounded border-2 border-theme-checkbox-border checked:bg-theme-checkbox-checked checked:border-theme-checkbox-checked focus:ring-2 focus:ring-theme-focus/30"
              />
              <span className="text-theme-text">체크박스 옵션 2 (체크됨)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-theme-toggle-bg rounded-full peer-checked:bg-theme-toggle-bg-on transition"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-theme-toggle-thumb rounded-full peer-checked:translate-x-5 transition"></div>
              </div>
              <span className="text-theme-text">토글 스위치</span>
            </label>
          </div>
        </section>

        {/* Links */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">링크 (Links)</h2>
          <div className="space-y-2">
            <p>
              <a href="#" className="text-theme-link hover:text-theme-link-hover underline">
                일반 링크
              </a>
            </p>
            <p>
              <a href="#" className="text-theme-link-visited hover:text-theme-link-hover underline">
                방문한 링크 스타일
              </a>
            </p>
            <p className="text-theme-text">
              텍스트 안의{' '}
              <a
                href="#"
                className="text-theme-link hover:text-theme-link-hover underline font-medium">
                인라인 링크
              </a>
              는 이렇게 표시됩니다.
            </p>
          </div>
        </section>

        {/* Progress Bar */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">프로그레스 바 (Progress Bar)</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-theme-text">진행률</span>
                <span className="text-theme-text-muted">75%</span>
              </div>
              <div className="w-full h-2 bg-theme-progress-bg rounded-full overflow-hidden">
                <div
                  className="h-full bg-theme-progress-fill rounded-full"
                  style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-theme-text">로딩</span>
                <span className="text-theme-text-muted">50%</span>
              </div>
              <div className="w-full h-2 bg-theme-progress-bg rounded-full overflow-hidden">
                <div
                  className="h-full bg-theme-progress-fill rounded-full"
                  style={{ width: '50%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-theme-text">완료</span>
                <span className="text-theme-text-muted">100%</span>
              </div>
              <div className="w-full h-2 bg-theme-progress-bg rounded-full overflow-hidden">
                <div
                  className="h-full bg-theme-success rounded-full"
                  style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">알림 (Notifications)</h2>
          <div className="space-y-4">
            <div className="bg-theme-notification-bg border border-theme-notification-border rounded-lg p-4 flex items-start gap-3">
              <div className="text-theme-info text-xl">ℹ️</div>
              <div>
                <p className="font-bold text-theme-text">정보 알림</p>
                <p className="text-theme-text-muted text-sm">일반적인 알림 메시지입니다</p>
              </div>
            </div>
            <div className="bg-theme-success-light border border-theme-success rounded-lg p-4 flex items-start gap-3 text-white">
              <div className="text-xl">✓</div>
              <div>
                <p className="font-bold">성공!</p>
                <p className="text-sm opacity-90">작업이 성공적으로 완료되었습니다</p>
              </div>
            </div>
            <div className="bg-theme-error-light border border-theme-error rounded-lg p-4 flex items-start gap-3 text-white">
              <div className="text-xl">✕</div>
              <div>
                <p className="font-bold">오류 발생</p>
                <p className="text-sm opacity-90">문제가 발생했습니다. 다시 시도해주세요</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dividers */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">구분선 (Dividers)</h2>
          <div className="space-y-4">
            <div>
              <p className="text-theme-text mb-2">기본 구분선</p>
              <hr className="border-theme-divider" />
            </div>
            <div>
              <p className="text-theme-text mb-2">두꺼운 구분선</p>
              <hr className="border-t-2 border-theme-border" />
            </div>
            <div>
              <p className="text-theme-text mb-2">점선 구분선</p>
              <hr className="border-dashed border-theme-border" />
            </div>
          </div>
        </section>

        {/* Text Styles */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">텍스트 스타일 (Text Styles)</h2>
          <div className="space-y-3">
            <p className="text-theme-text text-xl font-bold">볼드 텍스트</p>
            <p className="text-theme-text">일반 텍스트</p>
            <p className="text-theme-text-muted">흐린 텍스트 (Muted)</p>
            <p className="text-theme-text italic">이탤릭 텍스트</p>
            <p className="text-theme-text">
              <code className="px-2 py-1 bg-theme-tag-bg text-theme-tag-text rounded text-sm font-mono">
                인라인 코드
              </code>
            </p>
          </div>
        </section>

        {/* Tooltip Example */}
        <section className="bg-theme-bg-card p-6 rounded-lg border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-text mb-4">툴팁 (Tooltip)</h2>
          <div className="flex gap-4 items-center">
            <div className="relative group">
              <button className="px-4 py-2 rounded bg-theme-btn-primary-bg text-theme-btn-primary-text">
                마우스를 올려보세요
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-theme-tooltip-bg text-theme-tooltip-text text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
                툴팁 메시지
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-theme-bg-footer border-t border-theme-divider p-6 rounded-lg text-center">
          <p className="text-theme-text-muted">
            모든 요소가 현재 선택된 테마에 맞게 자동으로 색상이 변경됩니다
          </p>
        </footer>
      </div>
      <ThemeToggle />
    </div>
  );
}
