import { FormElementType } from "@/store/formAtom";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const initialTextQuestion = {
  type: "TEXT" as FormElementType,
  required: true,
  question: "Question ",
  options: [],
};

const initialParagraphQuestion = {
  type: "PARAGRAPH" as FormElementType,
  required: true,
  question: "Question ",
  options: [],
};

const initialCheckboxQuestion = {
  type: "CHECKBOX" as FormElementType,
  required: true,
  question: "Question ",
  options: ["Option 1", "Option 2"],
};

const initialSelectQuestion = {
  type: "SELECT" as FormElementType,
  required: true,
  question: "Question ",
  options: ["Option 1", "Option 2"],
};

export const initialQuestions = {
  TEXT: initialTextQuestion,
  PARAGRAPH: initialParagraphQuestion,
  CHECKBOX: initialCheckboxQuestion,
  SELECT: initialSelectQuestion,
};
