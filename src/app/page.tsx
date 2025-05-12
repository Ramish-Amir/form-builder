import AllForms from "@/components/AllForms";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold text-center tracking-[-.01em] font-[family-name:var(--font-geist-mono)]">
          Welcome to online form builder!
        </h1>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">Create your form online.</li>
          <li className="tracking-[-.01em]">
            Preview your form before sharing it.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href={"/create"}>
            <Button
              variant={"outline"}
              className="text-purple-500 hover:text-purple-600 hover:bg-purple-50 border-1 border-purple-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5v2H5v14h14v-5z"
                />
                <path fill="currentColor" d="M21 7h-4V3h-2v4h-4v2h4v4h2V9h4z" />
              </svg>
              Create New Form
            </Button>
          </Link>
        </div>
        <AllForms />
      </main>
    </div>
  );
}
