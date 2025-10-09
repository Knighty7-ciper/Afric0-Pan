"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  User,
  Settings,
  LogOut,
  LayoutDashboard,
  ArrowLeftRight,
  FileCheck,
  Shield,
  Newspaper,
  HelpCircle,
  Mail,
  Info,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface NavBarProps {
  user: {
    email: string
    isAdmin?: boolean
  }
}

export function NavBar({ user }: NavBarProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/")
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 border-b-4 border-primary bg-background/95 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg">
              <span className="text-2xl">🌍</span>
            </div>
            <div>
              <h1 className="font-serif text-xl font-black tracking-tight">PESA-AFRIK</h1>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Dashboard</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="font-semibold">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/transactions">
              <Button variant="ghost" size="sm" className="font-semibold">
                <ArrowLeftRight className="mr-2 h-4 w-4" />
                Transactions
              </Button>
            </Link>
            <Link href="/exchange">
              <Button variant="ghost" size="sm" className="font-semibold">
                <ArrowLeftRight className="mr-2 h-4 w-4" />
                Exchange
              </Button>
            </Link>
            <Link href="/converter">
              <Button variant="ghost" size="sm" className="font-semibold">
                <ArrowLeftRight className="mr-2 h-4 w-4" />
                Converter
              </Button>
            </Link>
            <Link href="/kyc">
              <Button variant="ghost" size="sm" className="font-semibold">
                <FileCheck className="mr-2 h-4 w-4" />
                KYC
              </Button>
            </Link>
            <Link href="/news">
              <Button variant="ghost" size="sm" className="font-semibold">
                <Newspaper className="mr-2 h-4 w-4" />
                News
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="ghost" size="sm" className="font-semibold">
                <HelpCircle className="mr-2 h-4 w-4" />
                FAQ
              </Button>
            </Link>
            {user.isAdmin && (
              <Link href="/admin">
                <Button variant="ghost" size="sm" className="font-semibold">
                  <Shield className="mr-2 h-4 w-4" />
                  Admin
                </Button>
              </Link>
            )}
          </nav>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-2 bg-transparent">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="text-sm font-bold">My Account</span>
                <span className="text-xs text-muted-foreground">{user.email}</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile" className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings" className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/about" className="cursor-pointer">
                <Info className="mr-2 h-4 w-4" />
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/contact" className="cursor-pointer">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer font-semibold text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default NavBar
