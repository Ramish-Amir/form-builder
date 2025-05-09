"use client";
import FormAnswer from "@/components/FormAnswer";
import { Button } from "@/components/ui/button";
import { formAtom } from "@/store/formAtom";
import { useAtom } from "jotai";

export default function Preview() {
  const [formData, setFormData] = useAtom(formAtom);
  return (
    <section className="flex justify-center gap-4 py-20 px-36 w-full min-h-screen">
      <div className="bg-white rounded-md h-max w-3/4 overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        {/* Form header */}
        <div className="flex flex-col gap-2 p-6 pb-16 bg-purple-50">
          <input
            readOnly
            disabled
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
            readOnly
            disabled
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
            <span>No elements added. Add elements from editor to preview.</span>
          </div>
        )}

        {formData?.elements?.map((formElement, index) => (
          <FormAnswer formElement={formElement} index={index} key={index} />
        ))}

        <div className="w-full p-6">
          {!!formData?.elements?.length && (
            <Button className="w-full bg-purple-500">
              Submit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="16"
                viewBox="0 0 15 16"
              >
                <path
                  fill="currentColor"
                  d="M12.49 7.14L3.44 2.27c-.76-.41-1.64.3-1.4 1.13l1.24 4.34q.075.27 0 .54l-1.24 4.34c-.24.83.64 1.54 1.4 1.13l9.05-4.87a.98.98 0 0 0 0-1.72Z"
                />
              </svg>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
