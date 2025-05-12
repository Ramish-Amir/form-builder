import { formAtom, FormElement } from "@/store/formAtom";
import { useAtom } from "jotai";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

export default function FormQuestion({
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

  const handleDeleteQuestion = () => {
    setFormData((prevForm) => {
      const updatedElements = [...prevForm.elements];
      updatedElements.splice(index, 1);
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

  const handleAddOption = () => {
    setFormData((prevForm) => {
      const updatedElements = [...prevForm?.elements];
      updatedElements[index] = {
        ...updatedElements[index],
        options: [...updatedElements[index].options!, "New option"],
      };

      return { ...prevForm, elements: updatedElements };
    });
  };

  const handleDeleteOption = (optionIndex: number) => {
    setFormData((prevForm) => {
      const updatedElements = [...prevForm?.elements];
      const updatedOptions = updatedElements[index].options!.filter(
        (_, i) => i !== optionIndex
      );

      updatedElements[index] = {
        ...updatedElements[index],
        options: updatedOptions,
      };
      return { ...prevForm, elements: updatedElements };
    });
  };

  const handleChangeOrder = (newIndex: number) => {
    setFormData((prevForm) => {
      const updatedElements = [...prevForm.elements];

      // Swapping positions
      [updatedElements[index], updatedElements[newIndex]] = [
        updatedElements[newIndex],
        updatedElements[index],
      ];

      return { ...prevForm, elements: updatedElements };
    });
  };

  return (
    <>
      <div className="flex gap-2 items-start py-8 px-6 border-t-1">
        {/* Sorter */}
        <div className="">
          <button
            disabled={index === 0}
            onClick={() => handleChangeOrder(index - 1)}
            className={`p-1 rounded-sm ${
              index !== 0 ? "hover:bg-gray-300 cursor-pointer" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke={index !== 0 ? "currentColor" : "gray"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 12l7-7l7 7m-7 7V5"
              />
            </svg>
          </button>
          <button
            disabled={index === formData?.elements?.length - 1}
            onClick={() => handleChangeOrder(index + 1)}
            className={`p-1 rounded-sm ${
              index !== formData.elements.length - 1
                ? "hover:bg-gray-300 cursor-pointer"
                : ""
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke={
                  index !== formData.elements.length - 1
                    ? "currentColor"
                    : "gray"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14m7-7l-7 7l-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Element content */}
        <div className="w-full">
          {/* Element header (including question/required/delete options) */}
          <div className="flex w-full gap-2 justify-between mb-4">
            <input
              type="text"
              name="question"
              placeholder="Question"
              className="w-full text-xl font-bold active:outline-none focus:outline-none focus:ring-0"
              value={formElement?.question}
              onChange={(e) => {
                handleQuestionInputChange(e.target.name, e.target.value);
              }}
            />
            <div className="flex items-center gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={formElement?.required}
                  onCheckedChange={(checked: boolean) =>
                    handleQuestionInputChange("required", checked)
                  }
                />
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Required
                </label>
              </div>
              <button
                onClick={handleDeleteQuestion}
                className="p-1 rounded-sm hover:bg-gray-300 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Answer content for "TEXT" question */}
          {formElement?.type === "TEXT" && (
            <div>
              <input
                type="text"
                name="description"
                placeholder="Answer"
                className="w-full text-gray-500 p-2 text-sm border-1 rounded-sm"
                readOnly
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
                readOnly
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
                    type="text"
                    name="Option"
                    placeholder="Option"
                    className="w-full text-gray-500 p-2 text-sm border-1 rounded-sm"
                    value={option}
                    onChange={(e) => {
                      handleQuestionOptionsChange(e.target.value, optionIndex);
                    }}
                  />
                  <button
                    onClick={() => handleDeleteOption(optionIndex)}
                    className="p-1 rounded-sm hover:bg-gray-300 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                      />
                    </svg>
                  </button>
                </div>
              ))}
              <Button onClick={handleAddOption} variant="outline">
                Add option
              </Button>
            </div>
          )}

          {/* Answer content for "SELECT" question */}
          {formElement?.type === "SELECT" && (
            <div>
              <div>
                <select
                  className="w-full text-gray-500 p-2 mb-2 text-sm border-1 rounded-sm"
                  disabled
                  defaultValue={""}
                >
                  <option value="">Select your option</option>
                </select>
                <span>Options:</span>
              </div>
              {formElement?.options?.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <div className="flex gap-2 items-center justify-between mb-4">
                    <input
                      type="text"
                      name="Option"
                      placeholder="Option"
                      className="w-full text-gray-500 p-2 text-sm border-1 rounded-sm"
                      value={option}
                      onChange={(e) => {
                        handleQuestionOptionsChange(
                          e.target.value,
                          optionIndex
                        );
                      }}
                    />
                    <button
                      onClick={() => handleDeleteOption(optionIndex)}
                      className="p-1 rounded-sm hover:bg-gray-300 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              <Button onClick={handleAddOption} variant="outline">
                Add option
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
