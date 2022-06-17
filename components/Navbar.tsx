import Link from "next/link";
import type { NavItem } from "../lib/types";

interface NavbarProps {
  brand: string;
  email: string;
  navItems: NavItem[];
}

const Navbar = ({ brand, email, navItems }: NavbarProps) => {
  return (
    <div className="bg-base-100 z-20">
      <div className="navbar mx-auto max-w-7xl px-4 h-[84px] z-20">
        <div className="flex-1">
          <Link href="/" passHref>
            <a className="text-2xl font-semibold">{brand}</a>
          </Link>
        </div>

        <div className="flex-none">
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal p-0">
              {navItems.map((n, i) => {
                return (
                  <li key={i}>
                    <Link href={n.path} passHref>
                      <a>
                        {n.title}
                        {n.subItems && n.subItems.length ? (
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                          </svg>
                        ) : null}
                      </a>
                    </Link>

                    <ul className="p-2 bg-base-100 z-30">
                      {n.subItems?.map((s, j) => {
                        return (
                          <li key={j}>
                            <Link href={s.path}>{s.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
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
    </div>
  );
};

export default Navbar;
