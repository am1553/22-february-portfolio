import { ChevronRight } from "@mui/icons-material";

export const ConnectOnLinkedInBtn = () => {
  return (
    <button className="border px-8 py-4 flex items-center gap-8 my-12 rounded-full item shadow-[5px_15px_8px_#00000050]">
      <span className="text-l">Connect on LinkedIn</span>
      <ChevronRight />
    </button>
  );
};