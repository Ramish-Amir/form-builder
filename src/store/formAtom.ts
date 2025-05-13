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
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  title: string;
  description: string;
  elements: FormElement[];
};

export const defaultFormData: FormData = {
  title: "Form Title",
  description: "Description",
  elements: [],
};

export const formAtom = atom<FormData>(defaultFormData);
