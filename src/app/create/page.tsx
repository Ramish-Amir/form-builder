"use client";
import ElementAdder from "@/components/ElementAdder";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { formAtom } from "@/store/formAtom";
import { useAtom } from "jotai";

export default function Create() {
  const [formData, setFormData] = useAtom(formAtom);
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

        {/* Form elements */}
        <div className="flex gap-2 items-start py-8 px-6 border-t-1">
          {/* Sorter */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 12l7-7l7 7m-7 7V5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14m7-7l-7 7l-7-7"
              />
            </svg>
          </div>
          {/* Element content */}
          <div className="w-full">
            {/* Element header (including question/required/delete options) */}
            <div className="flex w-full gap-2 justify-between mb-4">
              <input
                type="text"
                name="title"
                placeholder="Question"
                className="w-full text-xl font-bold active:outline-none focus:outline-none focus:ring-0"
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                }}
              />
              <div className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Required
                  </label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                  />
                </svg>
              </div>
            </div>
            {/* Element answer content */}
            <div>
              <input
                type="text"
                name="description"
                placeholder="Answer"
                className="w-full text-gray-500 p-2 text-sm border-1 rounded-sm"
                value={formData.description}
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-start py-8 px-6 border-t-1">
          {/* Sorter */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 12l7-7l7 7m-7 7V5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14m7-7l-7 7l-7-7"
              />
            </svg>
          </div>
          {/* Element content */}
          <div className="w-full">
            {/* Element header (including question/required/delete options) */}
            <div className="flex w-full gap-2 justify-between mb-4">
              <input
                type="text"
                name="title"
                placeholder="Question"
                className="w-full text-xl font-bold active:outline-none focus:outline-none focus:ring-0"
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                }}
              />
              <div className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Required
                  </label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                  />
                </svg>
              </div>
            </div>
            {/* Element answer content */}
            <div>
              <textarea
                name="description"
                placeholder="Answer"
                className="w-full text-gray-500 p-2 text-sm border-1 rounded-sm"
                value={formData.description}
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-start py-8 px-6 border-t-1">
          {/* Sorter */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 12l7-7l7 7m-7 7V5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14m7-7l-7 7l-7-7"
              />
            </svg>
          </div>
          {/* Element content */}
          <div className="w-full">
            {/* Element header (including question/required/delete options) */}
            <div className="flex w-full gap-2 justify-between mb-4">
              <input
                type="text"
                name="title"
                placeholder="Question"
                className="w-full text-xl font-bold active:outline-none focus:outline-none focus:ring-0"
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                }}
              />
              <div className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Required
                  </label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                  />
                </svg>
              </div>
            </div>
            {/* Element answer content */}
            <div>
              <div className="flex gap-2 items-center justify-between mb-4">
                <Checkbox />
                <input
                  type="text"
                  name="Option"
                  placeholder="Option"
                  className="w-full text-gray-500 p-2 text-sm border-1 rounded-sm"
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                  />
                </svg>
              </div>
              <div className="flex gap-2 items-center justify-between mb-4">
                <Checkbox />
                <input
                  type="text"
                  name="Option"
                  placeholder="Option"
                  className="w-full text-gray-500 p-2 text-sm border-1 rounded-sm"
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                  />
                </svg>
              </div>
              <Button variant="outline">Add option</Button>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-start py-8 px-6 border-t-1">
          {/* Sorter */}
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 12l7-7l7 7m-7 7V5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14m7-7l-7 7l-7-7"
              />
            </svg>
          </div>
          {/* Element content */}
          <div className="w-full">
            {/* Element header (including question/required/delete options) */}
            <div className="flex w-full gap-2 justify-between mb-4">
              <input
                type="text"
                name="title"
                placeholder="Question"
                className="w-full text-xl font-bold active:outline-none focus:outline-none focus:ring-0"
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                }}
              />
              <div className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox />
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Required
                  </label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                  />
                </svg>
              </div>
            </div>
            {/* Element answer content */}
            <div>
              <div>
                <select
                  className="w-full text-gray-500 p-2 mb-2 text-sm border-1 rounded-sm"
                  disabled
                  defaultValue={""}
                >
                  <option value="">Select your option</option>
                </select>
              </div>
              <span>Options:</span>
              <div className="flex gap-2 items-center justify-between mb-4">
                <input
                  type="text"
                  name="Option"
                  placeholder="Option"
                  className="w-full text-gray-500 p-2 text-sm border-1 rounded-sm"
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                  />
                </svg>
              </div>
              <div className="flex gap-2 items-center justify-between mb-4">
                <input
                  type="text"
                  name="Option"
                  placeholder="Option"
                  className="w-full text-gray-500 p-2 text-sm border-1 rounded-sm"
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                  />
                </svg>
              </div>
              <Button variant="outline">Add option</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
