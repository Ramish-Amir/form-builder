"use client";
import ElementAdder from "@/components/ElementAdder";
import FormQuestion from "@/components/FormQuestion";
import { getFormById } from "@/services/formsService";
import { defaultFormData, formAtom } from "@/store/formAtom";
import { useAtom } from "jotai";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function FormEditor() {
  const [formData, setFormData] = useAtom(formAtom);
  const params = useParams();

  useEffect(() => {
    if (params.formId) {
      const form = getFormById(parseInt(params.formId as string));
      setFormData(form);
    } else {
      setFormData(defaultFormData);
    }
  }, [params]);

  return (
    <section className="flex justify-between gap-4 py-20 px-36 w-full min-h-screen">
      <ElementAdder />
      <div className="bg-white rounded-md h-max w-3/4 overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        {/* Form header */}
        <div className="flex flex-col gap-2 p-6 pb-16 bg-purple-50">
          <input
            type="text"
            name="title"
            placeholder="Form title"
            className="w-full text-3xl font-bold active:outline-none focus:outline-none focus:ring-0"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
          />
          <input
            type="text"
            name="description"
            placeholder="Form description"
            className="w-full text-gray-500 active:outline-none focus:outline-none focus:ring-0"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />
        </div>

        {/* Display message if there are no elements initially */}
        {!formData?.elements?.length && (
          <div className="p-16 text-center text-gray-500 border-t-1">
            <span>
              No elements added. Use the panel on the left to add form elements.
            </span>
          </div>
        )}

        {formData?.elements?.map((formElement, index) => (
          <FormQuestion formElement={formElement} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}
