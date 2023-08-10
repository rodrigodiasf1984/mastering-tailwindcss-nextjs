import React from 'react'
import { Logo } from './Logo'
import { Search } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="flex w-full items-center gap-2 rounded-lg border border-e-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-500"
          placeholder="Search"
        />
      </div>
    </aside>
  )
}

export default Sidebar
