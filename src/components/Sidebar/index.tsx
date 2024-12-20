import Link from 'next/link';
import { SpriteCategories } from '../../shared/enums';

import { NavLink } from '../Sidebar/partials/NavLink';
import { WindowButtons } from '../Sidebar/partials/WindowButtons';

export const Sidebar = () => {
  return (
    <aside className="hidden md:block p-6 w-72 bg-zinc-950">
      <WindowButtons />

      <nav className="space-y-5 mt-10">
        <NavLink
          href="#"
          icon={{ name: 'home', category: SpriteCategories.MENU }}
        >
          Home
        </NavLink>
        <NavLink
          href="#"
          icon={{ name: 'search', category: SpriteCategories.MENU }}
        >
          Search
        </NavLink>
        <NavLink
          href="#"
          icon={{ name: 'layers', category: SpriteCategories.MENU }}
        >
          Your Library
        </NavLink>
      </nav>

      <nav className="mt-6 pt-6 border-t border-t-zinc-800 flex flex-col gap-3">
        <Link
          className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors ease-in-out duration-300"
          href="#"
        >
          My Musics
        </Link>
        <Link
          className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors ease-in-out duration-300"
          href="#"
        >
          Play Brazil
        </Link>
        <Link
          className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors ease-in-out duration-300"
          href="#"
        >
          New Music Daily
        </Link>
      </nav>
    </aside>
  );
};