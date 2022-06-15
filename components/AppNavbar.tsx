import Link from "next/link";
import type { NavItem } from "../lib/types";

interface AppNavbarProps {
  brand: string;
  email: string;
  navItems: NavItem[];
}

const AppNavbar = ({ brand, email, navItems }: AppNavbarProps) => {
  return (
    <div className="navbar px-0 h-[72px]">
      <div className="flex-1">
        <Link href="/" passHref>
          <a className="text-xl font-semibold">{brand}</a>
        </Link>
      </div>

      <div className="flex-none">
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal p-0">
            {navItems.map((n, i) => {
              return (
                <li key={i}>
                  <Link href={n.path}>{n.title}</Link>
                </li>
              );
            })}

            <a className="btn btn-primary" href={`mailto:${email}`}>
              Contact
            </a>
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
