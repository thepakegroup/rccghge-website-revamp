import React from "react";
import ContactUsForm from "./components/ContactUsForm";
import Logo from "@/components/Logo";
import LogoDivider from "@/components/LogoDivider";

export default function MinistriesLayout({params,
  children,
}: {
  params: {  slug: string };
  children: React.ReactNode;
  }) {

  return (
    <div className="page-spacing">
      <div>
        <LogoDivider />
        <div className="wrapper mt-10 ">{children}</div>
      </div>
      <ContactUsForm />
    </div>
  );
}
