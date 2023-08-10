import React from 'react'
import { Logo } from './Logo'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  HomeIcon,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-e-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-500"
          placeholder="Search"
        />
      </div>
      <nav className="space-y-0.5">
        <NavItem icon={HomeIcon} title="Home" />
        <NavItem icon={BarChart} title="Dashboard" />
        <NavItem icon={SquareStack} title="Projects" />
        <NavItem icon={CheckSquare} title="Tasks" />
        <NavItem icon={Flag} title="Reporting" />
        <NavItem icon={Users} title="Users" />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="flex flex-col gap-2">
          <NavItem icon={LifeBuoy} title="Support" />
          <NavItem icon={Cog} title="Settings" />
        </nav>
        <UsedSpaceWidget />
      </div>
    </aside>
  )
}

export default Sidebar
