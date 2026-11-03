import { useState, useMemo, useEffect } from 'react';
import { ACTIVITIES, Activity } from './data/activities';
import { filterActivities, getUniqueSubjects } from './utils/filterActivities';
import { Navbar } from './components/Navbar';
import { ActivityCarousel } from './components/ActivityCarousel';
import { ActivitySheet } from './components/ActivitySheet';
import { TeacherGuideModal } from './components/TeacherGuideModal';
import { PresentationModal } from './components/PresentationModal';
import { Toast } from './components/Toast';
import { ArrowLeft, ArrowRight, Filter, X } from 'lucide-react';

export default function App() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCycle, setSelectedCycle] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Extract unique subjects for filter dropdown
  const subjects = useMemo(() => getUniqueSubjects(ACTIVITIES), []);

  // Filter activities based on all criteria
  const filteredActivities = useMemo(() => {
    return filterActivities(ACTIVITIES, {
      searchQuery,
      selectedCycle,
      selectedSubject
    });
  }, [searchQuery, selectedCycle, selectedSubject]);

  const isFiltered =
    searchQuery.trim() !== '' ||
    selectedCycle !== 'all' ||
    selectedSubject !== 'all';

  // Automatically keep selectedId synchronized with filtered results
  useEffect(() => {
    if (filteredActivities.length > 0) {
      const isSelectedInFiltered = filteredActivities.some((a) => a.id === selectedId);
      if (!isSelectedInFiltered) {
        setSelectedId(filteredActivities[0].id);
      }
    }
  }, [filteredActivities, selectedId]);

  // Current active activity among filtered results
  const currentActivity = useMemo(() => {
    if (filteredActivities.length === 0) return null;
    return filteredActivities.find((a) => a.id === selectedId) || filteredActivities[0];
  }, [filteredActivities, selectedId]);

  // Current index in filtered list
  const currentIndex = useMemo(() => {
    if (!currentActivity || filteredActivities.length === 0) return -1;
    return filteredActivities.findIndex((a) => a.id === currentActivity.id);
  }, [filteredActivities, currentActivity]);

  // Navigation handlers navigating STRICTLY within filtered activities
  const handleSelectActivity = (id: number) => {
    setSelectedId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedId(filteredActivities[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredActivities.length - 1) {
      setSelectedId(filteredActivities[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCycle('all');
    setSelectedSubject('all');
  };

  const showToast = (_text: string, title: string) => {
    setToastMessage(title);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Keyboard navigation for presentation mode and pagination
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPresentationOpen(false);
        setIsGuideOpen(false);
      }
      if (e.key === 'ArrowRight' && (e.ctrlKey || isPresentationOpen)) {
        handleNext();
      }
      if (e.key === 'ArrowLeft' && (e.ctrlKey || isPresentationOpen)) {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, filteredActivities, isPresentationOpen]);

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans">
      {/* Top Navigation & Filters */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCycle={selectedCycle}
        onCycleChange={setSelectedCycle}
        selectedSubject={selectedSubject}
        onSubjectChange={setSelectedSubject}
        subjects={subjects}
        onOpenGuide={() => setIsGuideOpen(true)}
        totalFiltered={filteredActivities.length}
      />

      {/* Activity Carousel / Stepper - ONLY shows the filtered activities */}
      <ActivityCarousel
        activities={filteredActivities}
        selectedId={selectedId}
        onSelect={handleSelectActivity}
        totalActivitiesCount={ACTIVITIES.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6">
        {/* Active Filter Banner */}
        {isFiltered && (
          <div className="mb-4 p-3 bg-blue-50/90 border border-blue-200/90 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs text-blue-900 shadow-2xs no-print">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold flex items-center gap-1.5 text-blue-800">
                <Filter className="w-3.5 h-3.5" />
                Filtros ativos:
              </span>
              {searchQuery.trim() && (
                <span className="inline-flex items-center gap-1 bg-white border border-blue-200 px-2.5 py-1 rounded-lg font-medium text-slate-800 shadow-2xs">
                  Pesquisa: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-slate-400 hover:text-slate-700 ml-0.5 cursor-pointer font-bold"
                    title="Remover pesquisa"
                  >
                    &times;
                  </button>
                </span>
              )}
              {selectedCycle !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-white border border-blue-200 px-2.5 py-1 rounded-lg font-medium text-slate-800 shadow-2xs">
                  Ciclo: {selectedCycle}
                  <button
                    onClick={() => setSelectedCycle('all')}
                    className="text-slate-400 hover:text-slate-700 ml-0.5 cursor-pointer font-bold"
                    title="Remover filtro de ciclo"
                  >
                    &times;
                  </button>
                </span>
              )}
              {selectedSubject !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-white border border-blue-200 px-2.5 py-1 rounded-lg font-medium text-slate-800 shadow-2xs">
                  Disciplina: {selectedSubject}
                  <button
                    onClick={() => setSelectedSubject('all')}
                    className="text-slate-400 hover:text-slate-700 ml-0.5 cursor-pointer font-bold"
                    title="Remover filtro de disciplina"
                  >
                    &times;
                  </button>
                </span>
              )}
              <span className="font-semibold text-blue-700 ml-1">
                ({filteredActivities.length} de {ACTIVITIES.length} {filteredActivities.length === 1 ? 'atividade' : 'atividades'})
              </span>
            </div>

            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 bg-white hover:bg-blue-100/50 border border-blue-200 px-3 py-1.5 rounded-lg transition-colors shadow-2xs cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Limpar todos os filtros</span>
            </button>
          </div>
        )}

        {/* If user is filtering and no results found */}
        {filteredActivities.length === 0 || !currentActivity ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs max-w-xl mx-auto my-8">
            <span className="text-4xl block mb-3">🔍</span>
            <h2 className="text-xl font-bold text-slate-800 font-heading">
              Nenhuma atividade encontrada com os filtros atuais
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Experimente limpar o campo de pesquisa ou selecionar "Todos os Ciclos".
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer shadow-xs"
            >
              Repor Filtros
            </button>
          </div>
        ) : (
          <div>
            {/* The faithful visual graphic sheet */}
            <ActivitySheet
              activity={currentActivity}
              onCopyPrompt={showToast}
              onNavigateHome={() => {
                handleResetFilters();
                setSelectedId(1);
              }}
              onTogglePresentation={() => setIsPresentationOpen(true)}
            />

            {/* Bottom Stepper Navigation within filtered list */}
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs no-print">
              <button
                onClick={handlePrev}
                disabled={currentIndex <= 0}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Atividade Anterior</span>
              </button>

              <div className="text-center">
                <p className="text-xs text-slate-500">
                  Ideias para Usar a IA em Sala de Aula
                </p>
                <p className="text-xs font-bold text-slate-800">
                  {currentIndex + 1} de {filteredActivities.length} {filteredActivities.length === 1 ? 'Atividade Selecionada' : 'Atividades Selecionadas'}
                </p>
              </div>

              <button
                onClick={handleNext}
                disabled={currentIndex < 0 || currentIndex >= filteredActivities.length - 1}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-2xs"
              >
                <span>Próxima Atividade</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-white border-t border-slate-200/90 py-8 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-bold text-slate-700 font-heading text-sm">
            IDEIAS PARA USAR A IA EM SALA DE AULA
          </p>
          <p className="max-w-2xl mx-auto text-slate-500 text-[11px] leading-relaxed">
            Recurso pedagógico desenvolvido para professores do 1.º Ciclo, 2.º Ciclo, 3.º Ciclo e Ensino Secundário.
            Todas as ferramentas de IA mencionadas possuem hiperligações oficiais e devem ser utilizadas em conformidade com as diretrizes de privacidade e idades mínimas escolares.
          </p>
        </div>
      </footer>

      {/* Modals and Toasts */}
      <TeacherGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {currentActivity && (
        <PresentationModal
          activity={currentActivity}
          isOpen={isPresentationOpen}
          onClose={() => setIsPresentationOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex >= 0 && currentIndex < filteredActivities.length - 1}
        />
      )}

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
