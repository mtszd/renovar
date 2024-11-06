import { writable } from 'svelte/store';
import type { QuestionValue } from '../types/questions.types';

interface SurveyState {
  currentSurveyId: string | null;
  currentStepIndex: number;
  answers: Record<string, QuestionValue>;
}

function createSurveyStore() {
  const initialState: SurveyState = {
    currentSurveyId: null,
    currentStepIndex: 0,
    answers: {},
  };

  const { subscribe, set, update } = writable<SurveyState>(initialState);

  return {
    subscribe,
    initializeSurvey: (surveyId: string) => {
      const savedState = localStorage.getItem(`survey_${surveyId}`);
      if (savedState) {
        set(JSON.parse(savedState));
      } else {
        set({ ...initialState, currentSurveyId: surveyId });
      }
    },
    setAnswer: (questionId: string, value: QuestionValue) => {
      update(state => {
        const newState = {
          ...state,
          answers: { ...state.answers, [questionId]: value }
        };
        if (state.currentSurveyId) {
          localStorage.setItem(`survey_${state.currentSurveyId}`, JSON.stringify(newState));
        }
        return newState;
      });
    },
    nextStep: () => update(state => ({
      ...state,
      currentStepIndex: state.currentStepIndex + 1
    })),
    previousStep: () => update(state => ({
      ...state,
      currentStepIndex: Math.max(0, state.currentStepIndex - 1)
    })),
    reset: () => set(initialState)
  };
}

export const surveyStore = createSurveyStore();