import { VsCards } from './components/VsCards';
import { EvolutionPath } from './components/EvolutionPath';
import { SummaryList } from './components/SummaryList';
import { basicComparison, techStackComparison, directoryComparison, imageOptimization, legacyRemoved, improvements } from './data';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200 px-8 py-6 sticky top-0 z-50 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">SAM4S 홈페이지 리뉴얼 프로젝트</h1>
              <p className="text-slate-500 text-sm font-medium">
                클래식 ASP 레거시 환경에서 최신 웹 스택으로의 아키텍처 및 시스템 전환 요약표
              </p>
            </div>
            <div className="hidden md:flex space-x-2 shrink-0">
              <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider border border-slate-200">SAM4S_WEB</span>
              <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold uppercase tracking-wider border border-indigo-200 shadow-sm">Next-Gen UX</span>
            </div>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-24 bg-slate-50 mt-4 mb-16">
        
        <section>
          <div className="mb-8 pl-4 border-l-4 border-indigo-500 py-1">
            <h2 className="text-2xl font-bold text-slate-800">1. 한눈 요약</h2>
            <p className="text-slate-500 mt-2 text-sm leading-relaxed">
              이번 시스템 전환의 근본적인 환경 변화를 한줄로 정리합니다.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex flex-col md:flex-row items-stretch gap-6 relative z-10">
              <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded uppercase tracking-wider">Before</span>
                  <p className="text-slate-800 font-bold text-sm md:text-base leading-relaxed">
                    2000년대 클래식 <span className="text-red-600">ASP(VBScript) + MSSQL + EUC-KR + Flash</span> 기반 레거시 사이트
                  </p>
                  <div className="h-px bg-slate-200"></div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    🚨 <strong>보안 및 노출 취약성:</strong> SSL 미인증 상태 및 취약한 구형 암호화 코드 구조로 인해 보안 경고가 발생하며, 메이저 검색엔진 필터링 정책으로 인해 <strong className="bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold mx-0.5 whitespace-nowrap">검색 노출률이 99% 이상 저하 및 제외</strong>되어 웹 접근성마저 완전히 단절된 심각한 상태였습니다.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center shrink-0">
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-sm">
                  <ArrowRight className="w-5 h-5 hidden md:block" />
                  <ArrowRight className="w-5 h-5 rotate-90 md:hidden" />
                </div>
              </div>

              <div className="flex-1 bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold bg-indigo-600 text-white px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1 w-fit">
                    <Sparkles className="w-3 h-3" /> After
                  </span>
                  <p className="text-indigo-950 font-bold text-sm md:text-base leading-relaxed">
                    <span className="text-indigo-600 font-extrabold">Next.js 14 + TypeScript + Tailwind</span> 기반의 현대적 정적/SSR 웹앱 전면 재구축
                  </p>
                  <div className="h-px bg-indigo-100"></div>
                  <p className="text-xs text-indigo-950/75 leading-relaxed">
                    ✨ <strong>SEO 및 보안 전면 통제:</strong> 완비된 SSL 전송 레이어 위에 <strong>서버 사이드 렌더링(SSR)</strong>을 기본 탑재하여, 글로벌 검색 엔진 크롤러가 HTML 구조와 콘텐츠 데이터를 막힘없이 인덱싱하고 크롤링하도록 설계했습니다. <span className="bg-yellow-200 text-yellow-950 px-1.5 py-0.5 rounded font-bold mx-0.5 whitespace-nowrap">검색 노출 지수 극대화와 잠재 트래픽 선점에 최적화된 아키텍처</span>입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-8 pl-4 border-l-4 border-indigo-500 py-1">
            <h2 className="text-2xl font-bold text-slate-800">2. 프로젝트 기본 비교</h2>
            <p className="text-slate-500 mt-2 text-sm leading-relaxed">
              기반 환경과 인프라 수준에서의 핵심 아키텍처 변화입니다.
            </p>
          </div>
          <VsCards data={basicComparison} />
        </section>

        <section>
          <div className="mb-8 pl-4 border-l-4 border-indigo-500 py-1">
            <h2 className="text-2xl font-bold text-slate-800">3. 기술 스택 비교</h2>
            <p className="text-slate-500 mt-2 text-sm leading-relaxed">
              프론트엔드 및 백엔드 기술 요소의 구체적인 스택 변화입니다.
            </p>
          </div>
          <VsCards data={techStackComparison} />
        </section>

        <section>
          <div className="mb-8 pl-4 border-l-4 border-indigo-400 py-1">
            <h2 className="text-2xl font-bold text-slate-800">4. 디렉토리 및 규모 비교</h2>
            <p className="text-slate-500 mt-2 text-sm leading-relaxed">
              파편화된 대규모 소스를 모듈화로 압축한 변화를 보여줍니다.
            </p>
          </div>
          <EvolutionPath data={directoryComparison} />
        </section>

        <section>
          <div className="mb-8 pl-4 border-l-4 border-indigo-400 py-1">
            <h2 className="text-2xl font-bold text-slate-800">6. 핵심 작업: 이미지 최적화</h2>
            <p className="text-slate-500 mt-2 text-sm leading-relaxed">
              성능 향상을 위한 에셋 경량화 및 파이프라인 자동화 프로세스입니다.
            </p>
          </div>
          <EvolutionPath data={imageOptimization} />
        </section>

        <div className="grid grid-cols-1 gap-12 mt-12 pt-12 border-t border-slate-200">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
             <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
               <span className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 text-sm font-bold shadow-inner">7</span>
               제거된 레거시 (정리 항목)
             </h2>
             <SummaryList data={legacyRemoved} iconType="chevron" />
          </section>

          <section className="bg-indigo-50/50 rounded-3xl p-8 border border-indigo-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>
             <h2 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-3 relative z-10">
               <span className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-md">8</span>
               개선 효과 요약
             </h2>
             <SummaryList data={improvements} iconType="check" />
          </section>
        </div>

      </main>
      
      <footer className="bg-white border-t border-slate-200 px-8 py-6 text-xs text-slate-400 font-semibold w-full mt-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-500">
             <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
             Migrated to Next.js Architecture
          </div>
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">Scalability: High</span>
            <span className="uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">SEO: Optimized</span>
            <span className="uppercase tracking-widest bg-slate-50 px-2 py-1 rounded">UX: Mobile-First</span>
            <span className="uppercase tracking-widest bg-indigo-50 text-indigo-500 px-2 py-1 rounded">solutionDev_SJ</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
