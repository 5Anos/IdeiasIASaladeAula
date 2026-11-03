import React from 'react';
import { Activity } from '../data/activities';
import { ToolBadge } from './ToolBadge';
import { X, ArrowLeft, ArrowRight, Printer, Sparkles, BookOpen, Clock, Target, Check } from 'lucide-react';

interface PresentationModalProps {
  activity: Activity;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({
  activity,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="presentation-title"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex flex-col p-2 sm:p-6 overflow-y-auto animate-in fade-in"
    >
      {/* Top presentation toolbar */}
      <div className="flex items-center justify-between text-white pb-3 max-w-7xl mx-auto w-full shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider bg-blue-600 px-3 py-1 rounded-full">
            Modo Projetor / Quadro Interativo
          </span>
          <span className="text-sm text-slate-300 hidden sm:inline">
            Atividade {activity.id} de 20
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            aria-label="Atividade anterior"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-colors text-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            aria-label="Próxima atividade"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-colors text-white"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            aria-label="Sair do modo de apresentação"
            className="p-2 rounded-xl bg-rose-600 hover:bg-rose-700 transition-colors text-white ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main presentation canvas */}
      <div className="max-w-7xl mx-auto w-full bg-white rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 flex-1">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-100 via-sky-50 to-amber-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{activity.themeEmoji || '💡'}</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
              {activity.cycle}
            </span>
            <span className="text-xs font-semibold text-slate-600">
              {activity.disciplines} &bull; {activity.duration}
            </span>
          </div>
          <h2 id="presentation-title" className="text-2xl sm:text-4xl font-extrabold text-[#112a60] font-heading">
            {activity.id}. {activity.title}
          </h2>
        </div>

        {/* Steps row in large presentation cards */}
        <div>
          <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
            Passo a Passo com a Turma:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {activity.steps.map((s, idx) => (
              <div
                key={s.number}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    {s.number}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm font-heading">
                    {s.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Prompts Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
            <h3 className="text-sm font-bold text-amber-900 mb-2 font-heading">
              {activity.promptExample.initialLabel || 'Prompt inicial do aluno:'}
            </h3>
            <p className="text-sm font-serif italic text-slate-800 bg-white p-3 rounded-xl border border-amber-100">
              "{activity.promptExample.studentInitial}"
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
            <h3 className="text-sm font-bold text-blue-900 mb-2 font-heading">
              {activity.promptExample.enrichedLabel || 'Prompt enriquecido com a turma:'}
            </h3>
            <p className="text-sm font-medium text-slate-900 bg-white p-3 rounded-xl border border-blue-100">
              "{activity.promptExample.enriched}"
            </p>
          </div>
        </div>

        {/* Tools row */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Ferramentas:
            </span>
            <div className="flex flex-wrap gap-2">
              {activity.toolKeys.map((t) => (
                <ToolBadge key={t} toolKey={t} size="sm" />
              ))}
            </div>
          </div>
          <span className="text-xs text-slate-400">
            Pressione Esc ou o botão vermelho para fechar
          </span>
        </div>
      </div>
    </div>
  );
};
