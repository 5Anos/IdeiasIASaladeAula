import React from 'react';
import { Search, Info, X, BookOpen } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-3.5">
        {/* 1. Harmonized Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5">
          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl lg:text-[25px] font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              IDEIAS PARA USAR A IA EM SALA DE AULA
            </h1>
            <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed max-w-3xl">
              Atividades estruturadas com objetivos curriculares, passo a passo, engenharia de prompts e ferramentas recomendadas com hiperligações diretas.
            </p>
          </div>

          {/* Action button aligned in height & style */}
          <div className="shrink-0 self-start md:self-center">
            <button
              onClick={onOpenGuide}
              className="h-9 px-3.5 rounded-xl text-xs sm:text-[13px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/90 inline-flex items-center gap-2 transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-98"
            >
              <Info className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Guia do Professor</span>
            </button>
          </div>
        </div>

        {/* 2. Harmonized Unified Filter Bar */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2.5">
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
