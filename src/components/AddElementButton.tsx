import { initialQuestions } from "@/lib/utils";
import { formAtom, FormElementType } from "@/store/formAtom";
import { useAtom } from "jotai";

export default function AddElementButton({ button }: any) {
  const [form, setForm] = useAtom(formAtom);

  const handleAddElement = (type: string) => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        elements: [
          ...prevForm.elements,
          initialQuestions[type as FormElementType],
        ],
      };
    });
  };

  return (
    <button
      onClick={() => handleAddElement(button.type)}
      className="flex flex-col cursor-pointer transition duration-300 ease-in-out hover:bg-purple-50 w-[calc(50%-5px)] items-center justify-center gap-2 p-4 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
      {button.icon}
      <span>{button.label}</span>
    </button>
  );
}
