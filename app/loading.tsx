"use client";

import MaxWidthContainer from "@/components/MaxWidthContainer";
import PageSkeleton from "@/components/PageSkeleton";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <MaxWidthContainer>
      <PageSkeleton />
    </MaxWidthContainer>
  );
}
