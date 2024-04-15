import React from "react";
import ContactUsForm from "./components/ContactUsForm";
import Logo from "@/components/Logo";
import LogoDivider from "@/components/LogoDivider";
import Title from "./components/Title";

export default function MinistriesLayout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  console.log(params.slug);
  return (
    <div className="page-spacing">
      <div>
        <div className="title-top wrapper">
          {params.slug === "hge-children-ministry" && (
            <Title
              className="text-center mb-10"
              title=" “Jesus says, Let the little children come to me and do not hinder them, for to such belongs the kingdom of heaven” (Matthew 19:14)."
            />
          )}
          {params.slug === "prayer-ministry" && (
            <Title
              className="text-center mb-10"
              title="“Men ought always to pray and not to faint” (Luke 18:1)"
            />
          )}
          {params.slug === "young-adult-ministry" && (
            <div className="space-y-4 text-center max-w-4xl mx-auto mb-10">
              <Title
                className="text-center "
                title="How many times have you thought to yourself how great it would be to connect with GOD -"
              />
              <p className="font-medium">
                This is NEXT! - The Young Adult and Singles Ministry of Heavens
                Glorious Embassy.
              </p>
            </div>
          )}
        </div>

        <LogoDivider />
        <div
          className={` ${params.slug === "young-adult-ministry" ? "" : "wrapper"} mt-10 `}>
          {children}
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
}
