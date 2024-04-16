"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return <></>;
}
