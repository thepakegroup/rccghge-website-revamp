'use client'
import { ReactNode } from "react";



import { useMediaQuery } from "react-responsive";
export const Desktop = ({ children }: { children: ReactNode }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }: { children: ReactNode }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
export const Mobile = (({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
});
export const MobileAbove = ({ children }: { children: ReactNode }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
