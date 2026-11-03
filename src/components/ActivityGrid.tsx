import React from 'react';
import { Activity } from '../data/activities';
import { ToolBadge } from './ToolBadge';
import { ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react';

interface ActivityGridProps {
  activities: Activity[];
  onSelectActivity: (id: number) => void;
}

export const ActivityGrid: React.FC<ActivityGridProps> = ({
  activities,
  onSelectActivity
}) => {
  if (activities.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8 shadow-xs max-w-xl mx-auto my-8">
        <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4 text-2xl">
          🔍
        </div>
        <h3 className="text-lg font-bold text-slate-800 font-heading">
          Nenhuma atividade encontrada
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Tente ajustar os termos de pesquisa ou remover os filtros de ciclo e disciplina.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      {activities.map((act) => (
        <div
          key={act.id}
          className="group bg-white rounded-3xl border border-slate-200/80 hover:border-blue-400/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
        >
          {/* Card Top */}
          <div className="p-5 sm:p-6 space-y-3">
            {/* Badges row */}
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                <span>{act.themeEmoji || '💡'}</span>
                <span>Atividade #{act.id}</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                {act.cycle}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-600 transition-colors leading-snug">
              {act.title}
            </h2>

            {/* Disciplines */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="truncate">{act.disciplines}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{act.duration}</span>
            </div>

            {/* Brief snippet */}
            <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed pt-1">
              {act.briefDescription}
            </p>
          </div>

          {/* Card Bottom: Tools & Action */}
          <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 bg-slate-50/50 space-y-3">
            <div>
              <span className="text-[11px] font-semibold text-slate-600 block mb-1.5 uppercase tracking-wider">
                Ferramentas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {act.toolKeys.slice(0, 3).map((toolKey) => (
                  <ToolBadge key={toolKey} toolKey={toolKey} size="sm" />
                ))}
                {act.toolKeys.length > 3 && (
                  <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold text-slate-500 bg-slate-100 rounded-md">
                    +{act.toolKeys.length - 3}
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={() => onSelectActivity(act.id)}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-2xs group-hover:shadow-sm"
            >
              <span>Ver Ficha Gráfica Completa</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
