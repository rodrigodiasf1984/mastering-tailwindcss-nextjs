import { LogOut } from 'lucide-react'
import React from 'react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/rodrigodiasf1984.png"
        alt="Profile"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm/5 font-semibold text-zinc-700">
          Rodrigo D. Figueiredo
        </span>
        <span className="truncate text-sm/5 text-zinc-500">
          asdasgasfgasgsgasgrodrigodiasf@gmail.com
        </span>
      </div>
      <button
        className="ml-auto  rounded-md p-2 hover:bg-zinc-50"
        type="button"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
