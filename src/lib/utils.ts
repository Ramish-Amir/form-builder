import { FormElementType } from "@/store/formAtom";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const initialTextQuestion = {
  type: "TEXT" as FormElementType,
  required: true,
  question: "Question",
  options: [],
};

const initialParagraphQuestion = {
  type: "PARAGRAPH" as FormElementType,
  required: true,
  question: "Question",
  options: [],
};

const initialCheckboxQuestion = {
  type: "CHECKBOX" as FormElementType,
  required: true,
  question: "Question",
  options: ["Option 1", "Option 2"],
};

const initialSelectQuestion = {
  type: "SELECT" as FormElementType,
  required: true,
  question: "Question",
  options: ["Option 1", "Option 2"],
};

export const initialQuestions = {
  TEXT: initialTextQuestion,
  PARAGRAPH: initialParagraphQuestion,
  CHECKBOX: initialCheckboxQuestion,
  SELECT: initialSelectQuestion,
};

export const getFormattedDate = (date: Date) => {
  // Return just time if date is today, else return full date (with month name instead of number)
  const today = new Date();
  const validDate = new Date(date);
  const isToday =
    validDate.getDate() === today.getDate() &&
    validDate.getMonth() === today.getMonth() &&
    validDate.getFullYear() === today.getFullYear();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedDate = validDate.toLocaleDateString("en-US", options);
  return isToday
    ? formattedDate.split(", ")[1]
    : formattedDate.replace(/, /g, " ");
};
