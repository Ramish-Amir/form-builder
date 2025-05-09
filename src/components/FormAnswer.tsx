import { formAtom, FormElement } from "@/store/formAtom";
import { useAtom } from "jotai";
import { Checkbox } from "./ui/checkbox";

export default function FormAnswer({
  formElement,
  index,
}: {
  formElement: FormElement;
  index: number;
}) {
  const [formData, setFormData] = useAtom(formAtom);

  const handleQuestionInputChange = (
    name: string,
    value: string | boolean | ""
  ) => {
    setFormData((prevForm) => {
      const updatedElements = [...prevForm.elements];
      updatedElements[index] = {
        ...updatedElements[index],
        [name]: value,
      };
      return { ...prevForm, elements: updatedElements };
    });
  };

  const handleQuestionOptionsChange = (
    newValue: string | "",
    optionIndex: number
  ) => {
    setFormData((prevForm) => {
      const updatedElements = [...prevForm.elements];
      const updatedOptions = [...updatedElements[index].options!];
      updatedOptions[optionIndex] = newValue;
      updatedElements[index] = {
        ...updatedElements[index],
        options: updatedOptions,
      };

      return { ...prevForm, elements: updatedElements };
    });
  };

  return (
    <>
      <div className="flex gap-2 items-start py-3 px-6">
        {/* Element content */}
        <div className="w-full">
          {/* Element header (including question/required/delete options) */}
          <div className="flex w-full gap-2 justify-between mb-2">
            <input
              readOnly
              disabled
              type="text"
              name="question"
              placeholder="Question"
              className="w-full text-xl font-bold active:outline-none focus:outline-none focus:ring-0"
              value={formElement?.question}
              onChange={(e) => {
                handleQuestionInputChange(e.target.name, e.target.value);
              }}
            />
          </div>

          {/* Answer content for "TEXT" question */}
          {formElement?.type === "TEXT" && (
            <div>
              <input
                type="text"
                name="description"
                placeholder="Answer"
                className="w-full text-gray-500 p-2 text-sm border-1 rounded-sm"
              />
            </div>
          )}

          {/* Answer content for "TEXTAREA" question */}
          {formElement?.type === "PARAGRAPH" && (
            <div>
              <textarea
                name="description"
                placeholder="Answer"
                className="w-full text-gray-500 p-2 text-sm border-1 rounded-sm"
              />
            </div>
          )}

          {/* Answer content for "CHECKBOX" question */}
          {formElement?.type === "CHECKBOX" && (
            <div>
              {formElement?.options?.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="flex gap-2 items-center justify-between mb-4"
                >
                  <Checkbox />
                  <input
                    readOnly
                    disabled
                    type="text"
                    name="Option"
                    placeholder="Option"
                    className="w-full text-gray-500 text-sm active:outline-none focus:outline-none"
                    value={option}
                    onChange={(e) => {
                      handleQuestionOptionsChange(e.target.value, optionIndex);
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Answer content for "SELECT" question */}
          {formElement?.type === "SELECT" && (
            <div>
              <div>
                <select
                  className="w-full text-gray-500 p-2 mb-2 text-sm border-1 rounded-sm"
                  defaultValue={""}
                >
                  {formElement?.options?.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                  <option value="">Select your option</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
