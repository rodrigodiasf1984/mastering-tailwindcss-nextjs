'use client'

import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import TabItem from './TabItem'

export default function SettingsTabs() {
  return (
    <>
      <Tabs.Root defaultValue="tab1">
        <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-b-zinc-200">
          <TabItem title="My details" value="tab1" isSelected />
          <TabItem title="Profile" value="tab2" />
          <TabItem title="Password" value="tab3" />
          <TabItem title="Team" value="tab4" />
          <TabItem title="Plan" value="tab5" />
          <TabItem title="Billing" value="tab6" />
          <TabItem title="Email" value="tab7" />
          <TabItem title="Notifications" value="tab8" />
          <TabItem title="Integrations" value="tab9" />
          <TabItem title="Api" value="tab10" />
        </Tabs.List>
      </Tabs.Root>
    </>
  )
}
