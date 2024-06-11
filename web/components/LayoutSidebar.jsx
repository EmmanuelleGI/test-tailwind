import React from 'react';
import { Avatar } from './tailwind/avatar';
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from './tailwind/dropdown';
import { SidebarLayout } from './tailwind/sidebar-layout';
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from './tailwind/navbar';
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from './tailwind/sidebar';
import * as Headless from '@headlessui/react';
import {
  ArrowRightStartOnRectangleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardDocumentIcon,
  Cog8ToothIcon,
  CpuChipIcon,
  CubeIcon,
  IdentificationIcon,
  LightBulbIcon,
  PaperAirplaneIcon,
  PlusIcon,
  PresentationChartBarIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import logo from '../assets/logo.png'

function LayoutSidebar({children}) {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="/search" aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem>
            <NavbarItem href="/inbox" aria-label="Inbox">
              <InboxIcon />
            </NavbarItem>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/profile-photo.jpg" square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarItem href="/">
              <div className='logo'>
                <img src={logo} alt="logo Simio"/>
              </div>
            </SidebarItem>
          </SidebarHeader>
          <SidebarBody>

            <SidebarSection>

            <Dropdown>
              <DropdownButton as={SidebarItem} className="lg:mb-2.5" href="/home">
                  <ChatBubbleOvalLeftEllipsisIcon />
                  <SidebarLabel>Conversations</SidebarLabel>
                  <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
                <DropdownItem href="/home">
                  <DropdownLabel>Attribuées</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/home">
                  <DropdownLabel>Toutes</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

              <SidebarItem href="/campaigns">
                <PaperAirplaneIcon />
                <SidebarLabel>Campaigns</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/contacts">
                <IdentificationIcon />
                <SidebarLabel>Contacts</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/chatbots">
                <CpuChipIcon />
                <SidebarLabel>Chatbots</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/templates">
                <ClipboardDocumentIcon />
                <SidebarLabel>Templates</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/automations">
                <CubeIcon />
                <SidebarLabel>Automations</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/statistiques">
                <PresentationChartBarIcon />
                <SidebarLabel>Statistics</SidebarLabel>
              </SidebarItem>

              <Dropdown>
              <DropdownButton as={SidebarItem} className="lg:mb-2.5" href="/settings">
                <Cog6ToothIcon />
                <SidebarLabel>Settings</SidebarLabel>
                <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
                <DropdownItem href="/settings">
                  <DropdownLabel>Compagny</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <DropdownLabel>User</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            </SidebarSection>

            <SidebarSpacer />

          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar src="/profile-photo.jpg" className="size-10" square alt="" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Erica</span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      erica@example.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
      >
      {/* The page content */}
      {children}
    </SidebarLayout>
    );
};

export default LayoutSidebar;
