import EventsBlock from "@/components/EventsBlock";
import Logo from "@/components/Logo";
import ServiceTimes from "@/components/ServiceTimes";

export default function Home() {
  return (
    <main className="  py-8 ">
      {/* divider */}
      <div className="wrapper flex items-center w-full gap-3 lg:mb-16 lg:mt-5">
        <div className="line blueGradient w-full h-0.5"></div>
        <Logo className="w-20 lg:w-28" />
        <div className="line blueGradient w-full h-0.5"></div>
      </div>
      {/* service time component */}
      <div className="wrapper mb-14 lg:mb-20">
        <ServiceTimes />
      </div>
      <EventsBlock />
    </main>
  );
}
