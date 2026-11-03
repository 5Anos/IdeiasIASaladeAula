import { Activity } from '../data/activities';

export interface FilterOptions {
  searchQuery?: string;
  selectedCycle?: string;
  selectedSubject?: string;
  selectedTool?: string;
}

export function filterActivities(
  activities: Activity[],
  options: FilterOptions
): Activity[] {
  const { searchQuery = '', selectedCycle = 'all', selectedSubject = 'all', selectedTool = 'all' } = options;
  const query = searchQuery.trim().toLowerCase();

  return activities.filter((activity) => {
    // Cycle filter
    if (selectedCycle !== 'all') {
      const matchesCycle = activity.cycleCategories.some((c) =>
        c.toLowerCase().includes(selectedCycle.toLowerCase())
      ) || activity.cycle.toLowerCase().includes(selectedCycle.toLowerCase());
      if (!matchesCycle) return false;
    }

    // Subject filter
    if (selectedSubject !== 'all') {
      const matchesSubject = activity.disciplines.toLowerCase().includes(selectedSubject.toLowerCase());
      if (!matchesSubject) return false;
    }

    // Tool filter
    if (selectedTool !== 'all') {
      const matchesTool = activity.toolKeys.includes(selectedTool.toLowerCase());
      if (!matchesTool) return false;
    }

    // Text search query
    if (query) {
      const inTitle = activity.title.toLowerCase().includes(query);
      const inDiscipline = activity.disciplines.toLowerCase().includes(query);
      const inDesc = activity.briefDescription.toLowerCase().includes(query);
      const inPrompt = (
        activity.promptExample.studentInitial.toLowerCase().includes(query) ||
        activity.promptExample.enriched.toLowerCase().includes(query)
      );
      const inProduct = activity.finalProduct.toLowerCase().includes(query);
      const inTools = activity.toolKeys.some((t) => t.toLowerCase().includes(query));
      const inSteps = activity.steps.some(
        (s) => s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)
      );

      return inTitle || inDiscipline || inDesc || inPrompt || inProduct || inTools || inSteps;
    }

    return true;
  });
}

export function getUniqueSubjects(activities: Activity[]): string[] {
  const subjectSet = new Set<string>();
  for (const act of activities) {
    const parts = act.disciplines.split('|').map((s) => s.trim());
    for (const p of parts) {
      if (p) subjectSet.add(p);
    }
  }
  return Array.from(subjectSet).sort();
}

export function formatPromptForCopy(activity: Activity): string {
  return `=== ATIVIDADE: ${activity.id}. ${activity.title} ===
Disciplina / Ano: ${activity.disciplines} (${activity.cycle})

${activity.promptExample.initialLabel || 'Prompt inicial do aluno:'}
"${activity.promptExample.studentInitial}"

${activity.promptExample.enrichedLabel || 'Prompt enriquecido com a turma:'}
"${activity.promptExample.enriched}"`;
}
