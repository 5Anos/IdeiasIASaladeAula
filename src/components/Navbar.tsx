import React from 'react';
import { Search, Filter, BookOpen, Info, X } from 'lucide-react';
import { TOOLS_DATABASE } from '../data/tools';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCycle: string;
  onCycleChange: (c: string) => void;
  selectedSubject: string;
  onSubjectChange: (s: string) => void;
  selectedTool: string;
  onToolChange: (t: string) => void;
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
  selectedTool,
  onToolChange,
  subjects,
  onOpenGuide,
  totalFiltered
}) => {
  const cycles = [
    { id: 'all', label: 'Todos os Ciclos' },
    { id: '1.º Ciclo', label: '1.º Ciclo' },
    { id: '2.º Ciclo', label: '2.º Ciclo' },
    { id: '3.º Ciclo', label: '3.º Ciclo' },
    { id: 'Secundário', label: 'Secundário' }
  ];

  const toolsList = Object.values(TOOLS_DATABASE).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <header className="bg-white border-b border-slate-200/90 shadow-2xs no-print">
      {/* Top Branding Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
                Portal Pedagógico
              </span>
              <span className="text-xs text-slate-500 font-medium">
                20 Atividades com IA &bull; Ensino Básico e Secundário
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
              IDEIAS PARA USAR A IA EM SALA DE AULA
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Atividades estruturadas com objetivos curriculares, passo a passo, engenharia de prompts e ferramentas recomendadas com hiperligações diretas.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
            >
              <Info className="w-4 h-4 text-blue-600" />
              <span>Guia do Professor</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Cycle Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {cycles.map((c) => (
              <button
                key={c.id}
                onClick={() => onCycleChange(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedCycle === c.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search and Dropdowns */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Pesquisar atividades..."
                className="w-full pl-9 pr-8 py-1.5 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  aria-label="Limpar pesquisa"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Subject Dropdown */}
            <select
              value={selectedSubject}
              onChange={(e) => onSubjectChange(e.target.value)}
              aria-label="Filtrar por disciplina"
              className="py-1.5 px-3 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 text-slate-700 focus:outline-hidden focus:border-blue-500 font-medium"
            >
              <option value="all">Todas as Disciplinas</option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            {/* Tool Dropdown */}
            <select
              value={selectedTool}
              onChange={(e) => onToolChange(e.target.value)}
              aria-label="Filtrar por ferramenta de IA"
              className="py-1.5 px-3 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 text-slate-700 focus:outline-hidden focus:border-blue-500 font-medium"
            >
              <option value="all">Todas as Ferramentas</option>
              {toolsList.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
