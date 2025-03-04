"use client";
import { getMinistriesSlug } from "@/app/utils/api-request";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavButtons({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const [slugArr, setSlugArr] = useState<{ slug: string; name: string }[]>();
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  useEffect(() => {
    (async () => {
      try {
        const res = await getMinistriesSlug(params.category);
        setSlugArr(res);
        // Find the index of the current slug in slugAr
        const index = res?.findIndex((item) => item.slug === params.slug);
        setCurrentIndex(index ?? -1);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    })();
  }, [params.category, params.slug]);

  // Get the next and previous slugs
  const prevSlug =
    slugArr && currentIndex !== null && currentIndex > 0
      ? slugArr[currentIndex - 1].slug
      : null;
  const prevPage =
    slugArr && currentIndex !== null && currentIndex > 0
      ? slugArr[currentIndex - 1].name
      : null;
  const nextSlug =
    slugArr && currentIndex !== null && currentIndex < slugArr.length - 1
      ? slugArr[currentIndex + 1].slug
      : null;
  const nextPage =
    slugArr && currentIndex !== null && currentIndex < slugArr.length - 1
      ? slugArr[currentIndex + 1].name
      : null;

  return (
    <div className="fixed w-full flex justify-between items-center h-16 top-1/2 z-30 text-white capitalize ">
      {/* Previous Button */}

      <Link
        href={`/ourMinistries/${params.category}/${prevSlug}`}
        className={`prev-btn ${prevSlug ? "opacity-100" : "opacity-0 pointer-events-none"} h-full w-fit bg-zinc-500/60 rounded-r-full flex items-center group gap-3 pr-2 `}>
        <MoveLeft strokeWidth={3} className="shrink-0" />
        <h1 className="hidden group-hover:block ">{prevPage}</h1>
      </Link>

      {/* Next Button */}

      <Link
        href={`/ourMinistries/${params.category}/${nextSlug}`}
        className={`next-btn ${nextSlug ? "opacity-100" : "opacity-0 pointer-events-none"} h-full w-fit bg-zinc-500/60 rounded-l-full flex items-center text-right justify-end group gap-3 pl-2`}>
        <h1 className="hidden group-hover:block">{nextPage}</h1>
        <MoveRight strokeWidth={3} className="shrink-0" />
      </Link>
    </div>
  );
}
