"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAtom } from "jotai";
import { formAtom } from "@/store/formAtom";
import { saveForm } from "@/services/formsService";

export default function NavActions() {
  const pathname = usePathname();
  const [formData] = useAtom(formAtom);

  const [isHomePage, setIsHomagePage] = useState(true);

  useEffect(() => setIsHomagePage(pathname === "/"), [pathname]);

  if (isHomePage) {
    return null;
  }

  const handleSaveForm = () => {
    saveForm(formData);
  };

  return (
    <div className="flex gap-1 justify-between items-center">
      <Button variant={"outline"} onClick={handleSaveForm}>
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
            strokeWidth="2"
          >
            <path d="M7 3v5h8" />
            <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
            <path d="M17 21v-8H7v8" />
          </g>
        </svg>
        Save
      </Button>
      {pathname === "/create" && (
        <Link href={"/preview"}>
          <Button variant={"outline"}>Preview Form</Button>
        </Link>
      )}
      {pathname === "/preview" && (
        <Link href={"/create"}>
          <Button
            variant={"outline"}
            className="border-1 border-purple-400 text-purple-600"
          >
            Edit Form
          </Button>
        </Link>
      )}
    </div>
  );
}
