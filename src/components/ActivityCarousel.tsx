import React, { useRef, useEffect } from 'react';
import { Activity } from '../data/activities';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ActivityCarouselProps {
  activities: Activity[];
  selectedId: number;
  onSelect: (id: number) => void;
  filteredIds: Set<number>;
}

export const ActivityCarousel: React.FC<ActivityCarouselProps> = ({
  activities,
  selectedId,
  onSelect,
  filteredIds
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
    if (currentIndex < activities.length - 1) {
      onSelect(activities[currentIndex + 1].id);
    }
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex <= 0}
          aria-label="Atividade Anterior"
          className="p-1.5 rounded-xl border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 disabled:opacity-30 disabled:pointer-events-none transition-colors shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={containerRef}
          className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 px-1 scroll-smooth"
        >
          {activities.map((act) => {
            const isSelected = act.id === selectedId;
            const isMatch = filteredIds.has(act.id);

            return (
              <button
                key={act.id}
                ref={isSelected ? activeBtnRef : null}
                onClick={() => onSelect(act.id)}
                className={`group relative shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-200 scale-102'
                    : isMatch
                    ? 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                    : 'bg-slate-50 text-slate-400 border-slate-100 opacity-60 hover:opacity-100'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-lg flex items-center justify-center text-[11px] font-bold ${
                    isSelected
                      ? 'bg-white text-blue-700'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700'
                  }`}
                >
                  {act.id}
                </span>
                <span className="max-w-[140px] sm:max-w-[200px] truncate text-left">
                  {act.title}
                </span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= activities.length - 1}
          aria-label="Próxima Atividade"
          className="p-1.5 rounded-xl border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 disabled:opacity-30 disabled:pointer-events-none transition-colors shrink-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
