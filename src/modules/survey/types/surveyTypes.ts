export type InputValue = string | string[];

export interface SurveyAnswers {
    [key: string]: InputValue;
}

export interface RadioInputProps {
    name: string;
    value: string;
    label: string;
    checked?: boolean;
}