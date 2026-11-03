import { Activity } from '../data/activities';
import { TOOLS_DATABASE } from '../data/tools';

export interface FilterOptions {
  searchQuery?: string;
  selectedCycle?: string;
  selectedSubject?: string;
  selectedTool?: string;
}

/**
 * Normalizes text by removing accents, diacritics, and converting to lowercase.
 * E.g., "Português" -> "portugues", "Música" -> "musica", "1.º Ciclo" -> "1.o ciclo"
 */
export function normalizeText(str: string): string {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/º/g, 'o')
    .replace(/ª/g, 'a')
    .toLowerCase()
    .trim();
}

export function filterActivities(
  activities: Activity[],
  options: FilterOptions
): Activity[] {
  const {
    searchQuery = '',
    selectedCycle = 'all',
    selectedSubject = 'all',
    selectedTool = 'all'
  } = options;

  const rawQuery = searchQuery.trim();
  const query = normalizeText(rawQuery);

  return activities.filter((activity) => {
    // 1. Cycle filter
    if (selectedCycle !== 'all') {
      const normCycle = normalizeText(selectedCycle);
      const matchesCycle =
        activity.cycleCategories.some((c) => normalizeText(c).includes(normCycle)) ||
        normalizeText(activity.cycle).includes(normCycle);
      if (!matchesCycle) return false;
    }

    // 2. Subject filter
    if (selectedSubject !== 'all') {
      const normSubject = normalizeText(selectedSubject);
      const matchesSubject = normalizeText(activity.disciplines).includes(normSubject);
      if (!matchesSubject) return false;
    }

    // 3. Tool filter
    if (selectedTool !== 'all') {
      const normTool = selectedTool.toLowerCase().trim();
      const matchesTool = activity.toolKeys.some((t) => t.toLowerCase() === normTool);
      if (!matchesTool) return false;
    }

    // 4. Text search query
    if (query) {
      // Direct ID check (e.g., "1", "14", "#14", "atividade 14")
      const queryIdClean = query.replace(/^#/, '').replace(/^atividade\s*/, '').trim();
      if (queryIdClean && activity.id.toString() === queryIdClean) {
        return true;
      }

      // Check title
      if (normalizeText(activity.title).includes(query)) return true;

      // Check disciplines & cycle
      if (normalizeText(activity.disciplines).includes(query)) return true;
      if (normalizeText(activity.cycle).includes(query)) return true;

      // Check brief description & learning objectives
      if (normalizeText(activity.briefDescription).includes(query)) return true;
      if (activity.learningObjectives.some((obj) => normalizeText(obj).includes(query))) return true;

      // Check prompts
      if (
        normalizeText(activity.promptExample.studentInitial).includes(query) ||
        normalizeText(activity.promptExample.enriched).includes(query)
      ) {
        return true;
      }

      // Check final product
      if (normalizeText(activity.finalProduct).includes(query)) return true;

      // Check tools (both tool key and display name, e.g. "Bing Image Creator", "Adobe Express")
      const matchesAnyTool = activity.toolKeys.some((k) => {
        if (normalizeText(k).includes(query)) return true;
        const toolInfo = TOOLS_DATABASE[k];
        if (toolInfo && normalizeText(toolInfo.name).includes(query)) return true;
        return false;
      });
      if (matchesAnyTool) return true;

      // Check steps (title & description)
      const matchesAnyStep = activity.steps.some(
        (s) => normalizeText(s.title).includes(query) || normalizeText(s.description).includes(query)
      );
      if (matchesAnyStep) return true;

      return false;
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
  return Array.from(subjectSet).sort((a, b) => a.localeCompare(b, 'pt'));
}

export function formatPromptForCopy(activity: Activity): string {
  return `=== ATIVIDADE: ${activity.id}. ${activity.title} ===
Disciplina / Ano: ${activity.disciplines} (${activity.cycle})

${activity.promptExample.initialLabel || 'Prompt inicial do aluno:'}
"${activity.promptExample.studentInitial}"

${activity.promptExample.enrichedLabel || 'Prompt enriquecido com a turma:'}
"${activity.promptExample.enriched}"`;
}
