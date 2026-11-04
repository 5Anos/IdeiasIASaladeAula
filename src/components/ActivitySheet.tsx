import React from 'react';
import { Activity } from '../data/activities';
import { ToolBadge } from './ToolBadge';
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
  ArrowRight,
  FileEdit,
  MonitorPlay,
  Sliders,
  Pencil,
  Sparkles,
  ClipboardCheck,
  Compass,
  Users,
  Layers,
  WifiOff,
  Copy
} from 'lucide-react';

interface ActivitySheetProps {
  activity: Activity;
  onCopyPrompt?: (text: string, title: string) => void;
  onNavigateHome?: () => void;
  onTogglePresentation?: () => void;
}

export const ActivitySheet: React.FC<ActivitySheetProps> = ({
  activity,
  onCopyPrompt,
  onNavigateHome: _onNavigateHome,
  onTogglePresentation: _onTogglePresentation
}) => {
  const copyToClipboard = async (text: string, successMessage: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        const copied = document.execCommand('copy');
        document.body.removeChild(textarea);

        if (!copied) {
          throw new Error('Não foi possível copiar o texto.');
        }
      }

      if (onCopyPrompt) {
        onCopyPrompt(text, successMessage);
      }
    } catch {
      if (onCopyPrompt) {
        onCopyPrompt(text, 'Não foi possível copiar o texto.');
      }
    }
  };

  // Helper for step icons to match template
  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return (
          <div className="w-11 h-11 mx-auto my-2 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
            <FileEdit className="w-5 h-5 stroke-[1.75]" />
          </div>
        );
      case 2:
        return (
          <div className="w-11 h-11 mx-auto my-2 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-2xs">
            <MonitorPlay className="w-5 h-5 stroke-[1.75]" />
          </div>
        );
      case 3:
        return (
          <div className="w-11 h-11 mx-auto my-2 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shadow-2xs">
            <Sliders className="w-5 h-5 stroke-[1.75]" />
          </div>
        );
      case 4:
        return (
          <div className="w-11 h-11 mx-auto my-2 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-2xs">
            <Pencil className="w-5 h-5 stroke-[1.75]" />
          </div>
        );
      case 5:
        return (
          <div className="w-11 h-11 mx-auto my-2 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shadow-2xs">
            <Sparkles className="w-5 h-5 stroke-[1.75]" />
          </div>
        );
      case 6:
      default:
        return (
          <div className="w-11 h-11 mx-auto my-2 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-2xs">
            <ClipboardCheck className="w-5 h-5 stroke-[1.75]" />
          </div>
        );
    }
  };

  return (
    <div className="activity-sheet w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 overflow-hidden my-3 sm:my-5 transition-all">
      {/* Compact Activity Title Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#d9ebff] via-[#e5f0fe] to-[#fbf5e8] px-5 sm:px-8 py-3.5 sm:py-4 border-b border-blue-100/90">
        <div className="absolute top-0 right-1/4 w-36 h-12 bg-white/40 rounded-full blur-md pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          {/* Title, Badge and Emoji */}
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-200 flex items-center justify-center shadow-xs text-xl sm:text-2xl border border-white shrink-0">
              {activity.themeEmoji || '🎨'}
            </span>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-100/90 text-blue-800 border border-blue-200/80">
                  Atividade {activity.id} de 20
                </span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0f2d59] font-heading tracking-tight leading-snug mt-0.5">
                {activity.id}. {activity.title}
              </h1>
            </div>
          </div>

          {/* Subtle decorative yellow wave accent */}
          <div className="hidden sm:block shrink-0 opacity-80 self-center">
            <svg width="120" height="10" viewBox="0 0 120 10" fill="none">
              <path
                d="M2 7C25 2 55 9 118 4"
                stroke="#F59E0B"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="p-4 sm:p-7 space-y-6">
        {/* Top Section: Left Metadata Column + Right Description & Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Metadata Column (approx 4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {/* Card 1: Disciplina / Ano */}
            <div className="bg-[#edf4fe] border border-[#d2e3fc] rounded-2xl p-3.5 flex items-start gap-3 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 font-heading">
                  Disciplina / Ano
                </h2>
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug mt-0.5">
                  {activity.disciplines}
                </p>
                <p className="text-[11px] text-blue-800 font-medium mt-0.5">
                  ({activity.cycle})
                </p>
              </div>
            </div>

            {/* Card 2: Duração estimada */}
            <div className="bg-[#edf4fe] border border-[#d2e3fc] rounded-2xl p-3.5 flex items-start gap-3 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xs font-bold uppercase tracking-wider text-amber-900 font-heading">
                  Duração estimada
                </h2>
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug mt-0.5">
                  {activity.duration}
                </p>
              </div>
            </div>

            {/* Card 3: Modalidade de utilização */}
            <div className="bg-[#edf4fe] border border-[#d2e3fc] rounded-2xl p-3.5 flex items-start gap-3 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Laptop className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xs font-bold uppercase tracking-wider text-sky-900 font-heading">
                  Modalidade de utilização
                </h2>
                <p className="text-xs text-slate-700 leading-relaxed mt-0.5">
                  {activity.modality}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Description & Objectives (approx 8 cols) */}
          <div className="lg:col-span-8 space-y-3.5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
              {/* Breve Descrição */}
              <div
                id={`desc-${activity.id}`}
                className="md:col-span-7 bg-[#fffcf9] border border-orange-100 rounded-2xl p-4 sm:p-5 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#ea580c]">
                    <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Target className="w-3.5 h-3.5 text-orange-600" />
                    </div>
                    <h2 className="text-sm sm:text-base font-bold font-heading text-slate-900">
                      Breve Descrição
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activity.briefDescription}
                  </p>
                </div>
              </div>

              {/* Objetivos de Aprendizagem */}
              <div className="md:col-span-5 bg-[#fbf9fe] border border-purple-100 rounded-2xl p-4 sm:p-5 shadow-2xs">
                <div className="flex items-center gap-2 mb-2 text-purple-700">
                  <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center">
                    <BarChart3 className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  <h2 className="text-sm sm:text-base font-bold font-heading text-slate-900">
                    Objetivos de Aprendizagem
                  </h2>
                </div>
                <ul className="space-y-1.5">
                  {activity.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                      <div className="w-3.5 h-3.5 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-[9px]">
                        <Check className="w-2 h-2 stroke-[3]" />
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-700">
              <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                <Settings className="w-4 h-4 text-blue-700" />
              </div>
              <h2 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                Passo a Passo da Atividade
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
              Total: {activity.duration}
            </span>
          </div>

          {/* Dynamic Steps Horizontal Flow */}
          <div
            className={`grid ${
              activity.steps.length === 6
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
                : activity.steps.length === 5
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'
            } gap-3 relative`}
          >
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
                },
                {
                  badgeBg: 'bg-rose-500',
                  border: 'border-rose-200/80',
                  cardBg: 'bg-[#fff5f5]'
                },
                {
                  badgeBg: 'bg-indigo-600',
                  border: 'border-indigo-200/80',
                  cardBg: 'bg-[#f5f5ff]'
                }
              ];
              const c = colors[idx % colors.length];

              return (
                <div key={step.number} className="relative group">
                  <div
                    className={`${c.cardBg} border ${c.border} rounded-2xl p-3.5 h-full flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all`}
                  >
                    <div>
                      {/* Step Header with number badge, title and duration badge */}
                      <div className="flex items-start justify-between gap-1.5 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-6 h-6 rounded-full ${c.badgeBg} text-white font-bold text-xs flex items-center justify-center shadow-xs shrink-0`}
                          >
                            {step.number}
                          </span>
                          <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight font-heading">
                            {step.title}
                          </h3>
                        </div>
                        {step.duration && (
                          <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white border border-slate-200/90 text-slate-700 shadow-2xs">
                            {step.duration}
                          </span>
                        )}
                      </div>

                      {/* Central step illustration icon */}
                      {getStepIcon(step.number)}

                      {/* Step Description */}
                      <p className="text-xs text-slate-600 leading-relaxed mt-1.5 text-left">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Flow Arrow Connector between steps (on desktop) */}
                  {idx < activity.steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-white border border-slate-200 shadow-xs items-center justify-center text-slate-400">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Enquadramento Didático do Professor (Preparação, Papel da IA, Avaliação, Inclusão) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card Esquerda: Preparação do Professor & Papel Pedagógico da IA */}
          <div className="bg-[#fbfcfe] border border-blue-100 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div>
              <div className="flex items-center gap-2 text-blue-800 mb-1.5">
                <Compass className="w-4 h-4 text-blue-700 shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold tracking-wide text-blue-900">
                  Preparação Prévia do Professor
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {activity.teacherPreparation || 'Preparação dos recursos e configuração dos dispositivos da sala.'}
              </p>
            </div>

            <div className="pt-2 border-t border-blue-100/80">
              <div className="flex items-center gap-2 text-indigo-800 mb-1.5">
                <Sparkles className="w-4 h-4 text-indigo-700 shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold tracking-wide text-indigo-900">
                  Papel Pedagógico Específico da IA
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {activity.aiPedagogicalRole || 'Apoio à reflexão crítica e experimentação mediada em contexto pedagógico.'}
              </p>
            </div>
          </div>

          {/* Card Direita: Critérios de Avaliação & Diferenciação / Inclusão */}
          <div className="bg-[#fafcfa] border border-emerald-100 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div>
              <div className="flex items-center gap-2 text-emerald-800 mb-1.5">
                <ClipboardCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold tracking-wide text-emerald-900">
                  Critérios de Avaliação Observáveis
                </h3>
              </div>
              <ul className="space-y-1">
                {(activity.evaluationCriteria || []).map((crit, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 leading-tight">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-emerald-100/80">
              <div className="flex items-center gap-2 text-purple-800 mb-1.5">
                <Users className="w-4 h-4 text-purple-700 shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold tracking-wide text-purple-900">
                  Diferenciação Pedagógica e Inclusão
                </h3>
              </div>
              <ul className="space-y-1">
                {(activity.differentiation || []).map((diff, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 leading-tight">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Produto Final e Ferramentas Recomendadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {/* Produto Final */}
          <div className="bg-[#fff9f0] border border-amber-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-amber-700">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center shadow-2xs">
                  <Palette className="w-4 h-4 text-amber-700" />
                </div>
                <h2 className="text-sm sm:text-base font-bold font-heading text-slate-900">
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
            className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-blue-700">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center shadow-2xs">
                    <Wrench className="w-4 h-4 text-blue-700" />
                  </div>
                  <h2 className="text-sm sm:text-base font-bold font-heading text-slate-900">
                    Ferramentas Recomendadas
                  </h2>
                </div>
                <span className="text-[11px] text-slate-400">
                  Ligações oficiais
                </span>
              </div>

              <p className="text-[11px] text-slate-500 mb-2">
                Clique numa ferramenta para aceder diretamente à página oficial:
              </p>

              <div className="flex flex-wrap gap-2 pt-0.5">
                {activity.toolKeys.map((toolKey) => (
                  <ToolBadge key={toolKey} toolKey={toolKey} size="md" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section: Versão Essencial vs Extensão & Alternativa Desconectada (Offline) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card: Versão Essencial vs. Extensão Opcional */}
          <div className="bg-[#f8fafc] border border-slate-200/90 rounded-2xl p-4 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-slate-800">
              <Layers className="w-4 h-4 text-slate-700" />
              <h3 className="text-xs sm:text-sm font-bold font-heading text-slate-900">
                Versão Essencial vs. Extensão Opcional
              </h3>
            </div>
            {activity.essentialVsExtension && (
              <div className="space-y-1.5 text-xs text-slate-700">
                <p>
                  <span className="font-bold text-slate-900">Essencial: </span>
                  {activity.essentialVsExtension.essential}
                </p>
                <p>
                  <span className="font-bold text-blue-800">Extensão: </span>
                  {activity.essentialVsExtension.extension}
                </p>
              </div>
            )}
          </div>

          {/* Card: Alternativa Sem Dispositivos (Offline) */}
          <div className="bg-[#fdfcf9] border border-amber-100 rounded-2xl p-4 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-amber-900">
              <WifiOff className="w-4 h-4 text-amber-700" />
              <h3 className="text-xs sm:text-sm font-bold font-heading text-slate-900">
                Alternativa Sem Dispositivos (Offline / Desplugada)
              </h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {activity.offlineAlternative || 'Realização da atividade com recursos manuais, jogos de dramatização e discussão em grande grupo.'}
            </p>
          </div>
        </div>

        {/* Section: Engenharia Pedagógica de Prompts (Exemplo Prático) - Último Tópico */}
        {activity.promptExample && (
          <div className="bg-[#f8faff] border border-blue-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-100 pb-2.5">
              <div className="flex items-center gap-2 text-blue-800">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold font-heading text-slate-900">
                    Engenharia Pedagógica de Prompts (Exemplo Prático)
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Prompt inicial do aluno */}
              <div className="bg-white border border-amber-200/90 rounded-xl p-3.5 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80">
                      {activity.promptExample.initialLabel || 'Prompt inicial do aluno:'}
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          activity.promptExample.studentInitial,
                          'Prompt do aluno copiado!'
                        )
                      }
                      className="text-[11px] text-slate-500 hover:text-blue-700 flex items-center gap-1 px-2 py-0.5 rounded-md hover:bg-blue-50 transition-colors cursor-pointer"
                      title="Copiar prompt inicial"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </button>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-700 italic bg-amber-50/50 p-2.5 rounded-lg border border-amber-100 font-mono">
                    "{activity.promptExample.studentInitial}"
                  </p>
                </div>
              </div>

              {/* Prompt enriquecido com a turma */}
              <div className="bg-white border border-blue-200/90 rounded-xl p-3.5 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/80">
                      {activity.promptExample.enrichedLabel || 'Prompt enriquecido com a turma:'}
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          activity.promptExample.enriched,
                          'Prompt enriquecido copiado!'
                        )
                      }
                      className="text-[11px] text-blue-700 hover:text-blue-900 font-medium flex items-center gap-1 px-2 py-0.5 rounded-md hover:bg-blue-50 transition-colors cursor-pointer"
                      title="Copiar prompt enriquecido"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </button>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-800 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 font-mono leading-relaxed">
                    "{activity.promptExample.enriched}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
