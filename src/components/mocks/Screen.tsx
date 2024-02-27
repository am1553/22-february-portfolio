import { RefObject } from "react";

function Screen({
  className,
  children,
  isMobile,
  mobileRef,
}: {
  className?: string;
  children: JSX.Element;
  isMobile: boolean;
  mobileRef?: RefObject<HTMLDivElement>;
}) {
  return (
    <div
      className={`h-full w-full bg-[#222634] rounded-[2rem] p-1 shadow-inner relative ${className}`}
      ref={mobileRef}
    >
      {isMobile && (
        <div className="absolute h-10 w-1 bg-[#222634] top-20 -left-[2px] rounded-full"></div>
      )}
      {isMobile && (
        <div className="absolute h-10 w-1 bg-[#222634] top-32 -left-[2px] rounded-full"></div>
      )}
      {isMobile && (
        <div className="absolute h-10 w-1 bg-[#222634] top-24 -right-[2px] rounded-full"></div>
      )}
      <div className="overflow-hidden rounded-[2rem] h-full shadow-lg border-8 border-[#000000] relative">
        <div className="absolute w-1/2 max-w-28 h-2 rounded-b-xl bg-[#000000] top-0 left-2/4 -translate-x-2/4"></div>
        {children}
      </div>
    </div>
  );
}

export default Screen;
