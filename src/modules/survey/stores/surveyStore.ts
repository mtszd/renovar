import { writable } from 'svelte/store';
import type { SurveyAnswers, InputValue } from '../types/surveyTypes';

const STORAGE_KEY = 'survey_answers';

function createSurveyStore() {
    const loadFromStorage = (): SurveyAnswers => {
        if (typeof window === 'undefined') return {};
        
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error('Error loading survey answers:', e);
                return {};
            }
        }
        return {};
    };

    const { subscribe, set, update } = writable<SurveyAnswers>(loadFromStorage());

    subscribe(answers => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
        }
    });

    return {
        subscribe,
        setAnswer: (inputName: string, value: InputValue) => {
            update(answers => ({
                ...answers,
                [inputName]: value
            }));
        }
    };
}

export const surveyStore = createSurveyStore();