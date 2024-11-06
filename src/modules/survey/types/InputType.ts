export type InputType = 'radio' | 'checkbox' | 'text' | 'textarea' | 'file';

export interface SurveyNavProps {
  prevUrl: string;
  nextUrl: string;
  inputType: InputType;
  inputSelector: string;
}