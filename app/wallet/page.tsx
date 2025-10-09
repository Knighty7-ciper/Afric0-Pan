import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { WalletCard } from "@/components/wallet-card"
import { WalletBalance } from "@/components/Wallet/WalletBalance"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Download, ArrowLeftRight } from "lucide-react"
import Link from "next/link"
import NavBar from "@/components/nav-bar"

export default async function WalletPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("user_profiles").select("*").eq("user_id", user.id).single()

  const { data: wallet } = await supabase
    .from("wallets")
    .select("*")
    .eq("user_id", user.id)
    .eq("is_active", true)
    .single()

  if (!wallet) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar user={{ email: user.email!, isAdmin: profile?.role === "admin" }} />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">My Wallet</h2>
          <p className="text-muted-foreground">Manage your ACT tokens and transactions</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="md:col-span-2">
            <WalletCard balance={wallet.balance} publicKey={wallet.stellar_public_key} />
          </div>
          <WalletBalance balance={wallet.balance} currency="ACT" />
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Link href="/send">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Send</CardTitle>
                <Send className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Transfer ACT to another wallet</p>
              </CardContent>
            </Card>
          </Link>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receive</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Get ACT from another wallet</p>
            </CardContent>
          </Card>

          <Link href="/exchange">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Exchange</CardTitle>
                <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Convert to other currencies</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Wallet Information</CardTitle>
            <CardDescription>Your wallet details and security information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Currency</span>
                <span className="text-sm font-medium">{wallet.currency_code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <span className="text-sm font-medium">{wallet.is_active ? "Active" : "Inactive"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Created</span>
                <span className="text-sm font-medium">{new Date(wallet.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
