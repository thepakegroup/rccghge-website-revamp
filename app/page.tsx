"use client";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <Button >Button</Button>
<Logo />
    </main>
  );
}
