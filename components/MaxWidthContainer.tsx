import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}
export default function MaxWidthContainer({ children, className }: Props) {
    return <div className={cn("max-w-screen-2xl mx-auto", className)}>
      {children}
  </div>;
}
