import ElementAdder from "@/components/ElementAdder";

export default function Create() {
  return (
    <section className="flex justify-between gap-4 py-20 px-36 w-full min-h-screen">
      <ElementAdder />
      <div className="bg-white rounded-md p-4 h-max w-3/4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <h1>Form</h1>
      </div>
    </section>
  );
}
