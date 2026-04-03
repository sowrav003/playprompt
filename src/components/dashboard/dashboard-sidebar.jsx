"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { 
  CodeXml, 
  LayoutDashboard, 
  Lightbulb, 
  BarChart3, 
  Settings,
  LogOut 
} from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

const navigationLinks = [
  { 
    id: 1,
    name: "Dashboard", 
    href: "/dashboard",
    icon: LayoutDashboard 
  },
  { 
    id: 2,
    name: "Prompts", 
    href: "/dashboard/prompts",
    icon: Lightbulb 
  },
  { 
    id: 3,
    name: "Analytics", 
    href: "/dashboard/analytics",
    icon: BarChart3 
  },
  { 
    id: 4,
    name: "Settings", 
    href: "/dashboard/settings",
    icon: Settings 
  },
]

const DashboardSidebar = () => {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-3 px-2 py-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
            <CodeXml className="text-white text-lg" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-bold text-foreground">PlayPrompt</h2>
            <p className="text-xs text-muted-foreground">AI Prompt Manager</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="flex-1 px-4 py-6">
        <SidebarGroup>
          <div className="mb-2 px-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Menu
            </p>
          </div>
          <SidebarMenu className="gap-2">
            {navigationLinks.map((link) => {
              const Icon = link.icon
              return (
                <SidebarMenuItem key={link.id}>
                  <SidebarMenuButton 
                    asChild
                    className="h-10 px-4 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Link 
                      href={link.href}
                      className="flex items-center gap-3"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t px-4 py-4">
          <Button variant="ghost" className="w-full flex items-center justify-start gap-3 p-2">
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Logout</span>
          </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

export default DashboardSidebar