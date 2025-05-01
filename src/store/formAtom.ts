import { atom } from "jotai";

export type FormElementType = "TEXT" | "PARAGRAPH" | "CHECKBOX" | "SELECT";

export type FormElement = {
  type: FormElementType;
  label?: string;
  required: boolean;
  question: string;
  options?: string[];
};

export type FormData = {
  title: string;
  description: string;
  elements: FormElement[];
};

export const formAtom = atom<FormData>({
  title: "Form Title",
  description: "Description",
  elements: [],
});
