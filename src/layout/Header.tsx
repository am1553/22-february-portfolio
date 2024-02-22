import { useRef, useState } from "react";
import { Close, Menu } from "@mui/icons-material";
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
    <a
      href={href}
      onClick={onClick}
      className="text-xl font-semibold capitalize"
    >
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
    <header className="fixed h-16 w-full flex items-center px-4 bg-white text-dark-blue z-50">
      <div className="flex-1"></div>
      <button onClick={handleMenu}>{isMenu ? <Close /> : <Menu />}</button>

      {isMenu ? (
        <div className="" ref={navPanelRef}>
          <nav className="bg-white text-dark-blue absolute inset-0 top-16 h-fit p-4 flex flex-col">
            {NAV.map((navLink) => (
              <SectionLink
                href={navLink.href}
                title={navLink.title}
                onClick={handleNavClick}
              />
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
