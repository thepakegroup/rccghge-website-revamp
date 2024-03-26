import EventsBlock from "@/components/EventsBlock";

import PageForm from "./PageForm";

export default function page() {
  return (
    <div className=" page-spacing ">
      <div className="space-y-5   md:space-y-14 lg:max-w-3xl bg-white z-10 w-full wrapper  rounded-lg ">
        <h1 className="text-xl md:text-2xl">Kindly Fill The Following</h1>
        <PageForm />
      </div>
      <EventsBlock />
    </div>
  );
}
