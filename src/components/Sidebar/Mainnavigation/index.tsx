import {
  BarChart,
  CheckSquare,
  Flag,
  HomeIcon,
  SquareStack,
  Users,
} from 'lucide-react'
import React from 'react'
import { NavItem } from './NavItem'

export default function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem icon={HomeIcon} title="Home" />
      <NavItem icon={BarChart} title="Dashboard" />
      <NavItem icon={SquareStack} title="Projects" />
      <NavItem icon={CheckSquare} title="Tasks" />
      <NavItem icon={Flag} title="Reporting" />
      <NavItem icon={Users} title="Users" />
    </nav>
  )
}
