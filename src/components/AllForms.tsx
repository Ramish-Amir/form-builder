"use client";

import { useEffect, useState } from "react";
import FormDisplayItem from "./FormDisplayItem";
import { getAllForms } from "@/services/formsService";
import { useAtom } from "jotai";
import { storedFormsLengthAtom } from "@/store/storedFormsAtom";

export default function AllForms() {
  const [forms, setForms] = useState([]);
  const [storedFormsLength] = useAtom(storedFormsLengthAtom);

  useEffect(() => {
    // Fetch forms from local storage or API
    const savedForms = getAllForms();
    if (savedForms) {
      setForms(savedForms);
    }
  }, [storedFormsLength]);

  return (
    <>
      <h2 className="text-3xl font-bold text-center tracking-[-.05em] font-[family-name:var(--font-geist-mono)]">
        Your forms:
      </h2>

      {!!!forms?.length && (
        <section className="flex justify-between gap-4 w-full">
          <div className="bg-white rounded-md h-max w-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            {/* Display message if there are no elements initially */}
            <div className="p-16 text-center text-gray-500 border-t-1">
              <span>
                You have not created any forms yet. The forms you create and
                save will appear here.
              </span>
            </div>
          </div>
        </section>
      )}

      {forms.length > 0 && (
        <ol className="w-full">
          <p className="text-sm text-gray-500 mb-1 font-[family-name:var(--font-geist-mono)]">
            Select a form for further actions.
          </p>
          {forms.map((form, index) => (
            <FormDisplayItem key={index} form={form} />
          ))}
        </ol>
      )}
    </>
  );
}
