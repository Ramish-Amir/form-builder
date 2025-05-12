export default function AllForms() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center tracking-[-.05em] font-[family-name:var(--font-geist-mono)]">
        Your forms:
      </h2>

      <section className="flex justify-between gap-4 w-full">
        <div className="bg-white rounded-md h-max w-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          {/* Display message if there are no elements initially */}
          <div className="p-16 text-center text-gray-500 border-t-1">
            <span>
              You have not created any forms yet. The forms you create and save
              will appear here.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
