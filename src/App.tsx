import { useState, useMemo, useEffect } from 'react';
import { ACTIVITIES, Activity } from './data/activities';
import { filterActivities, getUniqueSubjects } from './utils/filterActivities';
import { Navbar } from './components/Navbar';
import { ActivityCarousel } from './components/ActivityCarousel';
import { ActivitySheet } from './components/ActivitySheet';
import { TeacherGuideModal } from './components/TeacherGuideModal';
import { PresentationModal } from './components/PresentationModal';
import { Toast } from './components/Toast';
import { Sparkles, ArrowLeft, ArrowRight, Printer, Share2, HelpCircle } from 'lucide-react';

export default function App() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCycle, setSelectedCycle] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedTool, setSelectedTool] = useState('all');
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Extract unique subjects for filter dropdown
  const subjects = useMemo(() => getUniqueSubjects(ACTIVITIES), []);

  // Filter activities
  const filteredActivities = useMemo(() => {
    return filterActivities(ACTIVITIES, {
      searchQuery,
      selectedCycle,
      selectedSubject,
      selectedTool
    });
  }, [searchQuery, selectedCycle, selectedSubject, selectedTool]);

  const filteredIds = useMemo(() => {
    return new Set(filteredActivities.map((a) => a.id));
  }, [filteredActivities]);

  // Current active activity
  const currentActivity = useMemo(() => {
    return ACTIVITIES.find((a) => a.id === selectedId) || ACTIVITIES[0];
  }, [selectedId]);

  // Navigation handlers
  const handleSelectActivity = (id: number) => {
    setSelectedId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (selectedId > 1) {
      setSelectedId((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (selectedId < ACTIVITIES.length) {
      setSelectedId((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
  }, [selectedId, isPresentationOpen]);

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
        selectedTool={selectedTool}
        onToolChange={setSelectedTool}
        subjects={subjects}
        onOpenGuide={() => setIsGuideOpen(true)}
        totalFiltered={filteredActivities.length}
      />

      {/* Activity Carousel / Stepper 1..20 */}
      <ActivityCarousel
        activities={ACTIVITIES}
        selectedId={selectedId}
        onSelect={handleSelectActivity}
        filteredIds={filteredIds}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6">
        {/* If user is filtering and no results */}
        {filteredActivities.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs max-w-xl mx-auto my-8">
            <span className="text-4xl block mb-3">🔍</span>
            <h2 className="text-xl font-bold text-slate-800 font-heading">
              Nenhuma atividade encontrada com os filtros atuais
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Experimente limpar o campo de pesquisa ou selecionar "Todos os Ciclos".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCycle('all');
                setSelectedSubject('all');
                setSelectedTool('all');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Repor Filtros
            </button>
          </div>
        ) : (
          <div>
            {/* Pagination helper bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1 no-print">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                  A visualizar:
                </span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 truncate max-w-[260px] sm:max-w-md">
                  #{currentActivity.id} de 20 &bull; {currentActivity.title}
                </span>
              </div>

              <div className="flex items-center gap-1.5 ml-auto">
                <button
                  onClick={handlePrev}
                  disabled={selectedId <= 1}
                  aria-label="Atividade anterior"
                  className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={selectedId >= ACTIVITIES.length}
                  aria-label="Atividade seguinte"
                  className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs"
                >
                  <span className="hidden sm:inline">Seguinte</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* The faithful visual graphic sheet */}
            <ActivitySheet
              activity={currentActivity}
              onCopyPrompt={showToast}
              onNavigateHome={() => handleSelectActivity(1)}
              onTogglePresentation={() => setIsPresentationOpen(true)}
            />

            {/* Bottom Stepper Navigation */}
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs no-print">
              <button
                onClick={handlePrev}
                disabled={selectedId <= 1}
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
                  {selectedId} de {ACTIVITIES.length} Atividades Disponíveis
                </p>
              </div>

              <button
                onClick={handleNext}
                disabled={selectedId >= ACTIVITIES.length}
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

      <PresentationModal
        activity={currentActivity}
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedId > 1}
        hasNext={selectedId < ACTIVITIES.length}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
