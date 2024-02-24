import { useRef, useState } from "react";
import { Close, GitHub, LinkedIn, Menu } from "@mui/icons-material";
import { useDisableBodyScroll, useOnClickOutside } from "../hooks";

const NAV = [
  { title: "home", href: "#home" },
  { title: "projects", href: "#projects" },
  { title: "experience", href: "#experience" },
  { title: "blog", href: "#blog" },
];

function SectionLink({
  href,
  onClick,
  title,
}: {
  href: string;
  onClick: () => void;
  title: string;
}) {
  return (
    <a href={href} onClick={onClick} className="text-xl capitalize">
      {title}
    </a>
  );
}

function Header() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const handleMenu = () => setIsMenu((prev) => !prev);
  const navPanelRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(navPanelRef, () => setIsMenu(false));
  useDisableBodyScroll(isMenu);

  const handleNavClick = () => {
    setIsMenu(false);
  };
  return (
    <header className="h-16 lg:h-24 w-full px-4 lg:px-20 border">
      <div className="flex items-center justify-center h-full w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 lg:gap-12">
          <a href="">
            <LinkedIn style={{ height: "30px", width: "30px" }} />
          </a>
          <a href="">
            <GitHub style={{ height: "30px", width: "30px" }} />
          </a>
        </div>
        <div className="flex-1"></div>
        <button onClick={handleMenu} className="lg:hidden">
          {isMenu ? <Close /> : <Menu />}
        </button>
        <nav className="max-lg:hidden flex gap-12">
          {NAV.map((navLink, i) => (
            <SectionLink
              key={i}
              href={navLink.href}
              title={navLink.title}
              onClick={handleNavClick}
            />
          ))}
        </nav>
        {isMenu ? (
          <div
            className="bg-white absolute inset-0 top-16 h-fit z-10 p-4 lg:hidden"
            ref={navPanelRef}
          >
            <nav className="flex flex-col">
              {NAV.map((navLink, i) => (
                <SectionLink
                  key={i}
                  href={navLink.href}
                  title={navLink.title}
                  onClick={handleNavClick}
                />
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
