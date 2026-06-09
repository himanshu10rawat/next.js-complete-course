"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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
      <div className="theme-mode">Dark</div>
    </header>
  );
}
