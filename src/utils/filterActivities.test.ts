import test from 'node:test';
import assert from 'node:assert/strict';
import { filterActivities, getUniqueSubjects, formatPromptForCopy } from './filterActivities';
import { ACTIVITIES } from '../data/activities';

test('ACTIVITIES has exactly 20 activities', () => {
  assert.equal(ACTIVITIES.length, 20);
  assert.equal(ACTIVITIES[0].id, 1);
  assert.equal(ACTIVITIES[19].id, 20);
});

test('every activity has required fields, 4 steps, and tools', () => {
  for (const act of ACTIVITIES) {
    assert.ok(act.title.length > 0, `Activity ${act.id} has title`);
    assert.ok(act.disciplines.length > 0, `Activity ${act.id} has disciplines`);
    assert.ok(act.cycle.length > 0, `Activity ${act.id} has cycle`);
    assert.ok(act.duration.length > 0, `Activity ${act.id} has duration`);
    assert.ok(act.modality.length > 0, `Activity ${act.id} has modality`);
    assert.ok(act.briefDescription.length > 0, `Activity ${act.id} has briefDescription`);
    assert.ok(act.learningObjectives.length >= 2, `Activity ${act.id} has learningObjectives`);
    assert.ok(act.steps.length >= 4 && act.steps.length <= 6, `Activity ${act.id} has between 4 and 6 steps (found ${act.steps.length})`);
    assert.ok(act.promptExample.studentInitial.length > 0, `Activity ${act.id} has promptExample`);
    assert.ok(act.promptExample.enriched.length > 0, `Activity ${act.id} has promptExample enriched`);
    assert.ok(act.finalProduct.length > 0, `Activity ${act.id} has finalProduct`);
    assert.ok(act.toolKeys.length > 0, `Activity ${act.id} has toolKeys`);
  }
});

test('filterActivities returns all activities when filters are default', () => {
  const result = filterActivities(ACTIVITIES, {
    selectedCycle: 'all',
    selectedSubject: 'all',
    selectedTool: 'all',
    searchQuery: ''
  });
  assert.equal(result.length, 20);
});

test('filterActivities filters correctly by cycle', () => {
  const c1 = filterActivities(ACTIVITIES, { selectedCycle: '1.º Ciclo' });
  assert.ok(c1.length >= 6);
  assert.ok(c1.every(a => a.cycleCategories.includes('1.º Ciclo')));

  const sec = filterActivities(ACTIVITIES, { selectedCycle: 'Secundário' });
  assert.ok(sec.length >= 2);
  assert.ok(sec.some(a => a.id === 19 || a.id === 20));
});

test('filterActivities filters correctly by search query', () => {
  const queryResult = filterActivities(ACTIVITIES, { searchQuery: 'peixe com rodas' });
  assert.equal(queryResult.length, 1);
  assert.equal(queryResult[0].id, 1);

  // Accent-insensitive test: 'equacao' should find 'equação'
  const mathResult = filterActivities(ACTIVITIES, { searchQuery: 'equacao' });
  assert.ok(mathResult.length >= 1);
  assert.ok(mathResult.some(a => a.id === 12));

  // Tool name search in query: 'canva'
  const canvaResult = filterActivities(ACTIVITIES, { searchQuery: 'canva' });
  assert.ok(canvaResult.length >= 2);

  // Direct number search
  const idResult = filterActivities(ACTIVITIES, { searchQuery: '14' });
  assert.ok(idResult.some(a => a.id === 14));
});

test('filterActivities filters correctly by tool', () => {
  const sunoResult = filterActivities(ACTIVITIES, { selectedTool: 'suno' });
  assert.ok(sunoResult.length >= 2);
  assert.ok(sunoResult.some(a => a.id === 3));
  assert.ok(sunoResult.some(a => a.id === 17));
});

test('getUniqueSubjects extracts disciplines', () => {
  const subjects = getUniqueSubjects(ACTIVITIES);
  assert.ok(subjects.includes('Matemática'));
  assert.ok(subjects.includes('Português'));
  assert.ok(subjects.includes('Ciências Naturais'));
});

test('formatPromptForCopy generates formatted text with activity info', () => {
  const text = formatPromptForCopy(ACTIVITIES[0]);
  assert.ok(text.includes('ATIVIDADE 1: A IA Desenha o que Eu Imagino'));
  assert.ok(text.includes('Português'));
  assert.ok(text.includes('Passo a Passo:'));
});

test('Activity 12 has unified mathematical equation 3x + 15 = 60 and solution x = 15', () => {
  const act12 = ACTIVITIES.find(a => a.id === 12);
  assert.ok(act12, 'Activity 12 exists');
  assert.ok(act12.steps[0].description.includes('3x + 15 = 60'), 'Step 1 has 3x + 15 = 60');
  assert.ok(act12.steps[2].description.includes('x = 15'), 'Step 3 has solution x = 15');
  assert.ok(act12.promptExample.enriched.includes('3x + 15 = 60'), 'Enriched prompt has 3x + 15 = 60');
  assert.ok(act12.finalProduct.includes('O Desafio das Equações da Turma'), 'Final product has updated title');
  assert.ok(!act12.promptExample.enriched.includes('4x + 12 = 60'), 'Outdated equation 4x + 12 = 60 eliminated');
});

test('every activity contains enriched pedagogical metadata, step durations and offline alternative', () => {
  for (const act of ACTIVITIES) {
    assert.ok(act.teacherPreparation && act.teacherPreparation.length > 10, `Activity ${act.id} has teacherPreparation`);
    assert.ok(act.evaluationCriteria && act.evaluationCriteria.length >= 2, `Activity ${act.id} has evaluationCriteria`);
    assert.ok(act.differentiation && act.differentiation.length >= 2, `Activity ${act.id} has differentiation`);
    assert.ok(act.essentialVsExtension && act.essentialVsExtension.essential.length > 5, `Activity ${act.id} has essentialVsExtension`);
    assert.ok(act.offlineAlternative && act.offlineAlternative.length > 10, `Activity ${act.id} has offlineAlternative`);
    assert.ok(act.aiPedagogicalRole && act.aiPedagogicalRole.length > 10, `Activity ${act.id} has aiPedagogicalRole`);
    for (const step of act.steps) {
      assert.ok(step.duration && step.duration.includes('min'), `Activity ${act.id} step ${step.number} has duration`);
    }
  }
});
