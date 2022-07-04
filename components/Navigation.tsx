import Navbar from "./Navbar";
import Link from "next/link";
import type { NavItem, SiteMetadata } from "../lib/types";
import { useRef } from "react";

interface DrawerProps {
  site: SiteMetadata;
  navItems: NavItem[];
  children: React.ReactNode;
}

const Navigation = ({ site, navItems, children }: DrawerProps) => {
  const drawerToggleRef = useRef<HTMLInputElement>(null);
  const drawerToggleId = "app-drawer";

  const onClickDrawerItem = () => {
    if (drawerToggleRef.current) {
      drawerToggleRef.current.checked = false;
    }
  };

  return (
    <div className="drawer drawer-end">
      <input
        ref={drawerToggleRef}
        id={drawerToggleId}
        type="checkbox"
        className="drawer-toggle"
      />

      <div className="drawer-content scroll-smooth">
        <Navbar
          brand={site.title}
          navItems={navItems}
          email={site.email}
          toggleId={drawerToggleId}
        />

        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor={drawerToggleId} className="drawer-overlay" />

        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {navItems.map((n, i) => {
            return (
              <li key={i}>
                <Link href={n.path} passHref>
                  <a onClick={onClickDrawerItem}>{n.title}</a>
                </Link>
              </li>
            );
          })}

          <a
            className="btn btn-primary"
            href={`mailto:${site.email}?subject=Contact From Website`}
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
