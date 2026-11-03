import React from 'react';
import { Activity } from '../data/activities';
import { ToolBadge } from './ToolBadge';
import { formatPromptForCopy } from '../utils/filterActivities';
import {
  BookOpen,
  Clock,
  Laptop,
  Target,
  BarChart3,
  Settings,
  Palette,
  Wrench,
  Check,
  Copy,
  ArrowRight,
  Printer,
  Share2,
  Maximize2,
  FileEdit,
  MonitorPlay,
  Sliders,
  Pencil
} from 'lucide-react';

interface ActivitySheetProps {
  activity: Activity;
  onCopyPrompt: (text: string, title: string) => void;
  onNavigateHome?: () => void;
  onTogglePresentation?: () => void;
}

export const ActivitySheet: React.FC<ActivitySheetProps> = ({
  activity,
  onCopyPrompt,
  onNavigateHome,
  onTogglePresentation
}) => {
  const handleCopyFull = () => {
    const full = formatPromptForCopy(activity);
    navigator.clipboard.writeText(full);
    onCopyPrompt(full, `Ficha da Atividade ${activity.id} copiada!`);
  };

  // Helper for step icons to match template
  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return (
          <div className="w-12 h-12 mx-auto my-2 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
            <FileEdit className="w-6 h-6 stroke-[1.75]" />
          </div>
        );
      case 2:
        return (
          <div className="w-12 h-12 mx-auto my-2 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-2xs">
            <MonitorPlay className="w-6 h-6 stroke-[1.75]" />
          </div>
        );
      case 3:
        return (
          <div className="w-12 h-12 mx-auto my-2 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shadow-2xs">
            <Sliders className="w-6 h-6 stroke-[1.75]" />
          </div>
        );
      case 4:
      default:
        return (
          <div className="w-12 h-12 mx-auto my-2 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-2xs">
            <Pencil className="w-6 h-6 stroke-[1.75]" />
          </div>
        );
    }
  };

  return (
    <div className="activity-sheet w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 overflow-hidden my-4 sm:my-8 transition-all">
        {/* Top Sheet Header Bar */}
        <div className="bg-[#f0f6ff]/80 border-b border-blue-100/80 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 text-[#1e3a8a] font-bold text-sm sm:text-base hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-[#2563eb] text-white flex items-center justify-center shadow-xs">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <span className="font-heading tracking-wide">Atividades com IA</span>
          </button>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => window.print()}
              title="Imprimir esta Ficha Pedagógica"
              aria-label="Imprimir ficha"
              className="p-1.5 text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyFull}
              title="Copiar texto completo da atividade"
              aria-label="Copiar texto completo"
              className="p-1.5 text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {onTogglePresentation && (
              <button
                onClick={onTogglePresentation}
                title="Modo Apresentação / Ecrã Completo"
                aria-label="Modo Apresentação"
                className="p-1.5 text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Hero Title Banner with Graphic Style matching attached artwork */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#d9ebff] via-[#e5f0fe] to-[#fbf5e8] px-6 sm:px-10 py-6 sm:py-8 border-b border-blue-100">
          {/* Subtle clouds/bubbles in background */}
          <div className="absolute top-2 left-1/3 w-32 h-16 bg-white/40 rounded-full blur-md pointer-events-none" />
          <div className="absolute -bottom-6 right-1/3 w-40 h-20 bg-amber-100/40 rounded-full blur-lg pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Title and Icon */}
            <div className="max-w-2xl text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 flex items-center justify-center shadow-md text-2xl border-2 border-white">
                  {activity.themeEmoji || '🎨'}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100/90 text-blue-800 border border-blue-200">
                  Atividade {activity.id} de 20
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f2d59] font-heading tracking-tight leading-snug">
                {activity.id}. {activity.title}
              </h1>

              {/* Decorative yellow wave arc underneath */}
              <div className="mt-2.5 flex justify-center md:justify-start">
                <svg width="200" height="14" viewBox="0 0 200 14" fill="none">
                  <path
                    d="M3 10C35 3 70 14 105 7C140 0 175 11 197 6"
                    stroke="#F59E0B"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Cheerful Friendly Mascot Banner / Characters */}
            <div className="shrink-0 flex items-center gap-3">
              {/* Friendly AI Robot Mascot */}
              <div className="relative flex items-center gap-3 bg-white/80 backdrop-blur-xs px-4 py-2.5 rounded-2xl border border-white/90 shadow-md">
                {/* Child thinking illustration icon */}
                <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-2xl shadow-2xs">
                  👧
                </div>

                {/* Thought bubble with pencil */}
                <div className="text-[11px] font-bold text-slate-700 bg-white px-2 py-1 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1">
                  <span>💭</span>
                  <span>Ideia</span>
                </div>

                {/* Friendly Smiling Robot with IA badge */}
                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-sky-400 to-blue-600 text-white flex flex-col items-center justify-center shadow-md border-2 border-white">
                    <span className="text-base leading-none">🤖</span>
                    <span className="text-[9px] font-extrabold bg-white text-blue-700 px-1 rounded-sm mt-0.5 tracking-tighter">
                      IA
                    </span>
                  </div>
                  {/* Robot antenna pulse */}
                  <span className="absolute -top-1 right-1 w-2.5 h-2.5 bg-emerald-400 border border-white rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="p-4 sm:p-8 space-y-6">
          {/* Top Section: Left Metadata Column + Right Description & Objectives */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Metadata Column (approx 4 cols) */}
            <div className="lg:col-span-4 space-y-3.5">
              {/* Card 1: Disciplina / Ano */}
              <div className="bg-[#edf4fe] border border-[#d2e3fc] rounded-2xl p-4 flex items-start gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 font-heading">
                    Disciplina / Ano
                  </h2>
                  <p className="text-sm font-bold text-slate-800 leading-snug mt-0.5">
                    {activity.disciplines}
                  </p>
                  <p className="text-xs text-blue-800 font-medium mt-0.5">
                    ({activity.cycle})
                  </p>
                </div>
              </div>

              {/* Card 2: Duração estimada */}
              <div className="bg-[#edf4fe] border border-[#d2e3fc] rounded-2xl p-4 flex items-start gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-amber-900 font-heading">
                    Duração estimada
                  </h2>
                  <p className="text-sm font-bold text-slate-800 leading-snug mt-0.5">
                    {activity.duration}
                  </p>
                </div>
              </div>

              {/* Card 3: Modalidade de utilização */}
              <div className="bg-[#edf4fe] border border-[#d2e3fc] rounded-2xl p-4 flex items-start gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Laptop className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-sky-900 font-heading">
                    Modalidade de utilização
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-0.5">
                    {activity.modality}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Description & Objectives (approx 8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Breve Descrição */}
                <div
                  id={`desc-${activity.id}`}
                  className="md:col-span-7 bg-[#fffcf9] border border-orange-100 rounded-2xl p-5 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5 text-[#ea580c]">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                        <Target className="w-4 h-4 text-orange-600" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                        Breve Descrição
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activity.briefDescription}
                    </p>
                  </div>
                </div>

                {/* Objetivos de Aprendizagem */}
                <div className="md:col-span-5 bg-[#fbf9fe] border border-purple-100 rounded-2xl p-5 shadow-2xs">
                  <div className="flex items-center gap-2.5 mb-2.5 text-purple-700">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-purple-600" />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                      Objetivos de Aprendizagem
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {activity.learningObjectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-snug">
                        <div className="w-4 h-4 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Passo a Passo da Atividade */}
          <div id={`passos-${activity.id}`} className="space-y-3">
            <div className="flex items-center gap-2.5 text-blue-700">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Settings className="w-4 h-4 text-blue-700" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
                Passo a Passo da Atividade
              </h2>
            </div>

            {/* 4 Steps Horizontal Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
              {activity.steps.map((step, idx) => {
                const colors = [
                  {
                    badgeBg: 'bg-blue-600',
                    border: 'border-blue-200/80',
                    cardBg: 'bg-[#f4f8fe]'
                  },
                  {
                    badgeBg: 'bg-purple-600',
                    border: 'border-purple-200/80',
                    cardBg: 'bg-[#f8f5fe]'
                  },
                  {
                    badgeBg: 'bg-amber-500',
                    border: 'border-amber-200/80',
                    cardBg: 'bg-[#fef9f0]'
                  },
                  {
                    badgeBg: 'bg-emerald-600',
                    border: 'border-emerald-200/80',
                    cardBg: 'bg-[#f2faf5]'
                  }
                ];
                const c = colors[idx % colors.length];

                return (
                  <div key={step.number} className="relative group">
                    <div
                      className={`${c.cardBg} border ${c.border} rounded-2xl p-4 h-full flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all`}
                    >
                      <div>
                        {/* Step Header with number badge and step name */}
                        <div className="flex items-center gap-2.5 mb-2">
                          <span
                            className={`w-7 h-7 rounded-full ${c.badgeBg} text-white font-bold text-xs flex items-center justify-center shadow-xs shrink-0`}
                          >
                            {step.number}
                          </span>
                          <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug font-heading">
                            {step.title}
                          </h3>
                        </div>

                        {/* Central step illustration icon */}
                        {getStepIcon(step.number)}

                        {/* Step Description */}
                        <p className="text-xs text-slate-600 leading-relaxed mt-2 text-center sm:text-left">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Flow Arrow Connector between steps (on desktop) */}
                    {idx < activity.steps.length - 1 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 shadow-xs items-center justify-center text-slate-400">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Produto Final e Ferramentas Recomendadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Produto Final */}
            <div className="bg-[#fff9f0] border border-amber-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3 text-amber-700">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center shadow-2xs">
                    <Palette className="w-5 h-5 text-amber-700" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                    Produto Final
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activity.finalProduct}
                </p>
              </div>
            </div>

            {/* Ferramentas Recomendadas with direct links and logos */}
            <div
              id={`ferramentas-${activity.id}`}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5 text-blue-700">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center shadow-2xs">
                      <Wrench className="w-5 h-5 text-blue-700" />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                      Ferramentas Recomendadas
                    </h2>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Ligações oficiais
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-2">
                  Clique numa ferramenta para aceder diretamente à página oficial:
                </p>

                {/* Grid / flex list of tools */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {activity.toolKeys.map((toolKey) => (
                    <ToolBadge key={toolKey} toolKey={toolKey} size="md" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
