import Link from "next/link";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between z-10 py-4 px-36 bg-white border-gray-200 dark:border-gray-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] fixed top-0 w-full">
        <Link href={"/"}>
          <div className="flex items-center gap-2 text-purple-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.75 2C5.50736 2 4.5 3.00736 4.5 4.25V6.25H3.25C2.83579 6.25 2.5 6.58579 2.5 7C2.5 7.41421 2.83579 7.75 3.25 7.75H4.5V11.25H3.25C2.83579 11.25 2.5 11.5858 2.5 12C2.5 12.4142 2.83579 12.75 3.25 12.75H4.5V16.25H3.25C2.83579 16.25 2.5 16.5858 2.5 17C2.5 17.4142 2.83579 17.75 3.25 17.75H4.5V19.75C4.5 20.9926 5.50736 22 6.75 22H17.25C18.4926 22 19.5 20.9926 19.5 19.75V4.25C19.5 3.00736 18.4926 2 17.25 2H6.75ZM6 17.75V19.75C6 20.1642 6.33579 20.5 6.75 20.5H17.25C17.6642 20.5 18 20.1642 18 19.75V4.25C18 3.83579 17.6642 3.5 17.25 3.5H6.75C6.33579 3.5 6 3.83579 6 4.25V6.25H7.25C7.66421 6.25 8 6.58579 8 7C8 7.41421 7.66421 7.75 7.25 7.75H6V11.25H7.25C7.66421 11.25 8 11.5858 8 12C8 12.4142 7.66421 12.75 7.25 12.75H6V16.25H7.25C7.66421 16.25 8 16.5858 8 17C8 17.4142 7.66421 17.75 7.25 17.75H6Z"
              />
            </svg>

            <div className="text-lg font-bold">Form Builder</div>
          </div>
        </Link>
        <NavActions />
      </nav>
    </>
  );
}
