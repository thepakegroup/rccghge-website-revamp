import { usePathname } from "next/navigation";


export default function useIsActiveLink() {
  const pathname = usePathname();
  const isActiveLink = (url: string) => {
    return pathname.endsWith(url) ? true : false;
  };
  return isActiveLink
}


