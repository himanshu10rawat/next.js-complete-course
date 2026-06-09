"use client";

import { useThemeContext } from "@/context/ThemeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link className={pathname === "/" ? "active" : ""} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/about" ? "active" : ""}
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={pathname === "/services" ? "active" : ""}
              href={"/services"}
            >
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <button type="button" className="theme-mode" onClick={toggleTheme}>
        {isDark ? "🌛" : "🌞"}
      </button>
    </header>
  );
}
