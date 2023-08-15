import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'

type TabItemProps = {
  value: string
  title: string
  isSelected?: boolean
}

export default function TabItem({
  value,
  title,
  isSelected = false,
}: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700"
    >
      <span>{title}</span>
    </Tabs.Trigger>
  )
}
