import { useEffect } from "react";

export default function useDisableBodyScroll(isOpen: boolean) {
  const body = document.getElementsByTagName("body")[0];
  return useEffect(() => {
    if (isOpen) {
      body.style.overflow = "hidden";
      body.style.height = "100vh";
    } else {
      body.style.overflow = "auto";
      body.style.height = "auto";
    }
  }, [body, isOpen]);
}
