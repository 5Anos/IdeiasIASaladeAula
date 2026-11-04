import React from 'react';
import { Search, X, BookOpen, Info } from 'lucide-react';
import { HeaderIllustration } from './HeaderIllustration';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCycle: string;
  onCycleChange: (c: string) => void;
  selectedSubject: string;
  onSubjectChange: (s: string) => void;
  subjects: string[];
  onOpenGuide: () => void;
  totalFiltered: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCycle,
  onCycleChange,
  selectedSubject,
  onSubjectChange,
  subjects,
  onOpenGuide,
  totalFiltered: _totalFiltered
}) => {
  const cycles = [
    { id: 'all', label: 'Todos os Ciclos' },
    { id: '1.º Ciclo', label: '1.º Ciclo' },
    { id: '2.º Ciclo', label: '2.º Ciclo' },
    { id: '3.º Ciclo', label: '3.º Ciclo' },
    { id: 'Secundário', label: 'Secundário' }
  ];

  return (
    <header className="bg-white border-b border-slate-200/90 shadow-2xs no-print">
      {/* 1. Illustrated Educational Header Banner matching topo_871597d6.png */}
      <div className="relative overflow-hidden bg-[#edf5fc] border-b border-blue-100/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left & Center: Robot Illustration + Title & Subtitles */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-7 text-left w-full lg:w-auto">
              {/* Robot + Desk Educational Illustration on the Left */}
              <div className="w-44 sm:w-56 md:w-64 lg:w-[265px] shrink-0 drop-shadow-xs">
                <HeaderIllustration className="w-full h-auto" />
              </div>

              {/* Title & Subtitles */}
              <div className="space-y-1.5 max-w-2xl text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0b274e] font-heading tracking-tight leading-tight">
                  Ideias para Usar a IA em Sala de{' '}
                  <span className="relative inline-block text-[#081d3b]">
                    Aula
                    {/* Decorative orange curved stroke underneath "Aula" */}
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full h-2.5 overflow-visible"
                      viewBox="0 0 100 12"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 8C28 2 68 11 98 4"
                        stroke="#e67e22"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>
                
                <div className="text-xs sm:text-[13px] md:text-sm text-slate-600 font-normal leading-relaxed space-y-1">
                  <p className="font-bold text-slate-800 text-sm sm:text-[15px] pt-1">
                    A sua próxima grande ideia para a sala de aula começa aqui!
                  </p>
                  <p className="text-slate-600 leading-normal max-w-xl">
                    Explore novas possibilidades, descubra atividades inspiradoras e experimente ferramentas de Inteligência Artificial que podem transformar a forma de ensinar, envolver os alunos e dar vida às aprendizagens.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: INFORMAÇÃO Pill Button */}
            <div className="shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto">
              <button
                onClick={onOpenGuide}
                aria-label="Abrir informação"
                className="h-11 sm:h-12 px-7 rounded-full text-xs sm:text-sm font-bold text-[#1d63ed] bg-white hover:bg-blue-50/80 border-2 border-[#1d63ed] inline-flex items-center gap-2.5 transition-all cursor-pointer shadow-xs hover:shadow-md active:scale-98 shrink-0 tracking-wider"
              >
                <Info className="w-5 h-5 text-[#1d63ed] shrink-0" />
                <span>INFORMAÇÃO</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Harmonized Unified Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2.5">
          {/* Segmented Cycle Filter */}
          <div className="bg-slate-100/90 p-1 rounded-xl flex items-center gap-1 overflow-x-auto no-scrollbar shrink-0 border border-slate-200/60">
            {cycles.map((c) => {
              const isActive = selectedCycle === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => onCycleChange(c.id)}
                  className={`h-7 sm:h-7.5 px-3 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Search and Subject Controls (Equal heights & cohesive styling) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-1 lg:justify-end">
            {/* Subject Dropdown */}
            <div className="relative w-full sm:w-auto min-w-[175px]">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <select
                value={selectedSubject}
                onChange={(e) => onSubjectChange(e.target.value)}
                aria-label="Filtrar por disciplina"
                className="h-9 w-full pl-8 pr-7 rounded-xl text-xs sm:text-[13px] bg-slate-50 border border-slate-200 text-slate-700 focus:bg-white focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-100 font-medium cursor-pointer transition-all"
              >
                <option value="all">Todas as Disciplinas</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-60 md:w-68">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Pesquisar atividades..."
                className="h-9 w-full pl-9 pr-8 rounded-xl text-xs sm:text-[13px] bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  aria-label="Limpar pesquisa"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer font-bold"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
