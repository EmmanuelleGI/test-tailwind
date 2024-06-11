import React from 'react';
import PageHeading from "../components/PageHeading";
import { Sidebar, SidebarBody, SidebarSection, SidebarItem } from '../components/tailwind/sidebar';

export default function Settings() {
  const handleAction = () => {
    console.log("Action button clicked");
  };

  return (
    <div className="flex h-screen">
      <Sidebar className="w-64 border-r border-box w-15">
        <SidebarBody>
          <SidebarSection>
            <SidebarItem href="/">Home</SidebarItem>
            <SidebarItem href="/events">Events</SidebarItem>
            <SidebarItem href="/orders">Orders</SidebarItem>
            <SidebarItem href="/broadcasts">Broadcasts</SidebarItem>
            <SidebarItem href="/settings">Settings</SidebarItem>
          </SidebarSection>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-col flex-1">
        <div className="text-white ">
    
          <PageHeading title="Settings" />
          
        </div>
        <div className="p-4 flex-1">
        
        </div>
      </div>
    </div>
  );
}
