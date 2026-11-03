import React, { useRef, useEffect } from 'react';
import { Activity } from '../data/activities';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ActivityCarouselProps {
  activities: Activity[];
  selectedId: number;
  onSelect: (id: number) => void;
  totalActivitiesCount?: number;
}

export const ActivityCarousel: React.FC<ActivityCarouselProps> = ({
  activities,
  selectedId,
  onSelect,
  totalActivitiesCount = 20
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeBtnRef.current && containerRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [selectedId]);

  const currentIndex = activities.findIndex((a) => a.id === selectedId);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelect(activities[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < activities.length - 1) {
      onSelect(activities[currentIndex + 1].id);
    }
  };

  if (activities.length === 0) {
    return null;
  }

  const isFiltered = activities.length < totalActivitiesCount;

  return (
    <nav
      aria-label="Navegação de Atividades"
      className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 sticky top-0 z-30 shadow-2xs no-print"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-2">
        {/* Left Scroll Navigation Button & Optional Filter Pill */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handlePrev}
            disabled={currentIndex <= 0}
            aria-label="Atividade Anterior"
            title="Atividade Anterior"
            className="w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-colors shadow-2xs shrink-0 cursor-pointer disabled:opacity-25 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {isFiltered && (
            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg hidden xl:inline-flex items-center gap-1">
              <span>{activities.length} de {totalActivitiesCount}</span>
            </span>
          )}
        </div>

        {/* Scrollable Activities Tab List with enhanced typography and no ugly cutoffs */}
        <div
          ref={containerRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1 scroll-smooth flex-1"
        >
          {activities.map((act) => {
            const isSelected = act.id === selectedId;

            return (
              <button
                key={act.id}
                ref={isSelected ? activeBtnRef : null}
                onClick={() => onSelect(act.id)}
                title={`#${act.id}: ${act.title} (${act.cycle})`}
                className={`group relative shrink-0 h-9 flex items-center gap-2 px-3 rounded-xl text-xs sm:text-[13px] transition-all duration-150 border cursor-pointer select-none ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-semibold ring-2 ring-blue-500/20'
                    : 'bg-slate-50/90 text-slate-700 border-slate-200/90 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-900 font-medium'
                }`}
              >
                {/* Number badge */}
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-white text-blue-700'
                      : 'bg-white text-slate-600 border border-slate-200/80 group-hover:border-blue-200 group-hover:text-blue-700'
                  }`}
                >
                  {act.id}
                </span>

                {/* Title with generous responsive width */}
                <span
                  className={`text-left truncate ${
                    isSelected
                      ? 'max-w-[200px] sm:max-w-[280px] md:max-w-[340px] font-bold text-white'
                      : 'max-w-[150px] sm:max-w-[200px] md:max-w-[240px] text-slate-700 group-hover:text-slate-900 font-medium'
                  }`}
                >
                  {act.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Scroll Navigation Button */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleNext}
            disabled={currentIndex < 0 || currentIndex >= activities.length - 1}
            aria-label="Próxima Atividade"
            title="Próxima Atividade"
            className="w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-colors shadow-2xs shrink-0 cursor-pointer disabled:opacity-25 disabled:pointer-events-none"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};
