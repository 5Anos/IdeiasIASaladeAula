import React from 'react';
import { Search, X, BookOpen } from 'lucide-react';
import { HeaderIllustration } from './HeaderIllustration';
import { HeaderLaptopIcon } from './HeaderLaptopIcon';

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
      {/* 1. Illustrated Educational Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#e1effc] via-[#eff6fc] to-[#e4f1fc] border-b border-blue-200/70">
        {/* Subtle decorative background shapes */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/40 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-2 right-1/4 w-36 h-24 bg-white/50 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -bottom-8 right-12 w-44 h-32 bg-amber-100/30 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
            
            {/* Left: Laptop Icon + Title & Subtitle */}
            <div className="flex items-center gap-3.5 sm:gap-4 max-w-2xl text-left w-full lg:w-auto">
              {/* Illustrated IA Laptop Icon with yellow sparkle rays */}
              <div className="shrink-0 hidden sm:block">
                <HeaderLaptopIcon className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-sm" />
              </div>

              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0f2d59] font-heading tracking-tight leading-tight">
                  Ideias para Usar a IA em Sala de{' '}
                  <span className="relative inline-block text-[#0a2342]">
                    Aula
                    {/* Decorative yellow wave arc underneath "Aula" */}
                    <svg
                      className="absolute -bottom-1 left-0 w-full h-2 text-amber-400"
                      viewBox="0 0 100 12"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 8C25 2 60 11 98 4"
                        stroke="#f59e0b"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>
                <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed max-w-xl">
                  Atividades estruturadas com objetivos curriculares, passo a passo pedagógico e ferramentas recomendadas com hiperligações diretas.
                </p>
              </div>
            </div>

            {/* Right: AI Robot + Lightbulb Illustration & Guia do Professor Button */}
            <div className="flex items-center justify-between lg:justify-end gap-3 sm:gap-6 w-full lg:w-auto shrink-0 mt-1 lg:mt-0">
              {/* Robot + Desk Educational Illustration */}
              <div className="w-36 sm:w-44 md:w-52 h-auto shrink-0 drop-shadow-xs">
                <HeaderIllustration className="w-full h-auto" />
              </div>

              {/* Guia do Professor Button */}
              <button
                onClick={onOpenGuide}
                className="h-10 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-bold text-blue-700 bg-white hover:bg-blue-50 border-2 border-blue-600 inline-flex items-center gap-2 transition-all cursor-pointer shadow-xs hover:shadow-md active:scale-98 shrink-0"
              >
                <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Guia do Professor</span>
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
