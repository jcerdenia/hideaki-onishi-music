import Link from "next/link";

interface NavItem {
  title: string;
  path: string;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "mailto:name@email.com",
  },
];

const AppNavbar = () => {
  return (
    <div className="navbar bg-base-100 py-3 h-[72px]">
      <div className="flex-1">
        <Link href="/" passHref>
          <a className="btn btn-ghost normal-case text-xl">
            Hideaki Onishi Music
          </a>
        </Link>
      </div>

      <div className="flex-none">
        <div className="invisible sm:visible">
          <ul className="menu  menu-horizontal p-0">
            {navItems.map((n, i) => {
              if (i === navItems.length - 1) {
                return (
                  <a key={i} className="btn btn-primary" href={n.path}>
                    {n.title}
                  </a>
                );
              }

              return (
                <li key={i}>
                  <Link href={n.path}>{n.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="dropdown dropdown-end dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost sm:hidden">
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

          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((n, i) => {
              if (i === navItems.length - 1) {
                return (
                  <a
                    key={i}
                    className="btn btn-primary btn-outline"
                    href={n.path}
                  >
                    {n.title}
                  </a>
                );
              }

              return (
                <li key={i}>
                  <Link href={n.path}>{n.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
