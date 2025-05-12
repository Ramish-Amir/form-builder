import { Button } from "./ui/button";

export default function FormDisplayItem() {
  return (
    <li className="flex justify-between group w-full mb-3 items-center gap-4 p-2 rounded-md bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
      <div className="flex justify-start items-center gap-1 text-purple-500 font-[family-name:var(--font-geist-sans)]">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15a1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27"
          />
          <path
            fill="currentColor"
            d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27Z"
          />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M2 5v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C3.012 3.682 2 4.141 2 5m11 0v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C14.012 3.682 13 4.141 13 5"
          />
        </svg>
        <span className="text-gray-600">My first form title</span>
      </div>
      <div className="flex justify-evenly items-center gap-1 group-hover:opacity-100 opacity-0 transition-all duration-200">
        <Button
          variant={"outline"}
          // className="text-purple-500 hover:text-purple-600 hover:bg-purple-50 border-1 border-purple-400"
          className="w-max"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              color="currentColor"
            >
              <path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045" />
              <path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0" />
            </g>
          </svg>
        </Button>
        <Button
          variant={"outline"}
          className="text-purple-500 hover:text-purple-600 hover:bg-purple-50 border-1 border-purple-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21.455 5.416a.75.75 0 0 1-.096.943l-9.193 9.192a.75.75 0 0 1-.34.195l-3.829 1a.75.75 0 0 1-.915-.915l1-3.828a.8.8 0 0 1 .161-.312L17.47 2.47a.75.75 0 0 1 1.06 0l2.829 2.828a1 1 0 0 1 .096.118m-1.687.412L18 4.061l-8.518 8.518l-.625 2.393l2.393-.625z"
              clipRule="evenodd"
            />
            <path
              fill="currentColor"
              d="M19.641 17.16a44.4 44.4 0 0 0 .261-7.04a.4.4 0 0 1 .117-.3l.984-.984a.198.198 0 0 1 .338.127a46 46 0 0 1-.21 8.372c-.236 2.022-1.86 3.607-3.873 3.832a47.8 47.8 0 0 1-10.516 0c-2.012-.225-3.637-1.81-3.873-3.832a46 46 0 0 1 0-10.67c.236-2.022 1.86-3.607 3.873-3.832a48 48 0 0 1 7.989-.213a.2.2 0 0 1 .128.34l-.993.992a.4.4 0 0 1-.297.117a46 46 0 0 0-6.66.255a2.89 2.89 0 0 0-2.55 2.516a44.4 44.4 0 0 0 0 10.32a2.89 2.89 0 0 0 2.55 2.516c3.355.375 6.827.375 10.183 0a2.89 2.89 0 0 0 2.55-2.516"
            />
          </svg>
        </Button>
        <Button
          variant={"outline"}
          className="text-red-500 hover:text-red-600 hover:bg-red-50 border-red-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
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
        </Button>
      </div>
    </li>
  );
}
